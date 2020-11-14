import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {WorkDto} from './models/work.dto';
import {environment} from '../../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WhatIfService {

  loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  selected: BehaviorSubject<WorkDto> = new BehaviorSubject<WorkDto>(null);
  opened: BehaviorSubject<Partial<WorkDto>[]> = new BehaviorSubject<Partial<WorkDto>[]>([{id: null}]);

  constructor(private httpClient: HttpClient) {
  }

  getNodes(id: string): Observable<WorkDto[]> {
    return this.httpClient.get<WorkDto[]>(`${environment.API_URL}/works?id=${id || ''}`)
      .pipe(
        tap(() => this.loading.next(true)),
        map(result => {
          this.loading.next(false);
          return result.map(x => new WorkDto(x)).sort((a, b) => a.totalCost - b.totalCost);
        }),
        catchError(() => {
          this.loading.next(false);
          return of([]);
        }),
      );
  }
}
