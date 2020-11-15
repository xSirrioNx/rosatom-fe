import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
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
  needToUpdate: Subject<void> = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  getNodes(id: string): Observable<WorkDto[]> {
    this.loading.next(true);
    return this.httpClient.get<WorkDto[]>(`${environment.API_URL}/works?id=${id || ''}`)
      .pipe(
        map(result => {
          this.loading.next(false);
          return result.map(x => new WorkDto(x)).sort((a, b) => b.totalCost - a.totalCost);
        }),
        catchError(() => {
          this.loading.next(false);
          return of([]);
        }),
      );
  }

  getMain() {
    this.loading.next(true);
    return this.httpClient.get<WorkDto>(`${environment.API_URL}/works/main`)
      .pipe(
        map(result => {
          this.loading.next(false);
          return new WorkDto(result);
        }),
        catchError(() => {
          this.loading.next(false);
          return of(null);
        }),
      );
  }

  updateNode(data) {
    this.loading.next(true);
    return this.httpClient.patch(`${environment.API_URL}/works`, data)
      .pipe(
        tap(() => this.loading.next(false)),
        catchError(() => {
          this.loading.next(false);
          return of([]);
        }),
      );
  }
}
