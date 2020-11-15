import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {WhatIfService} from '../what-if.service';
import {WorkDto} from '../models/work.dto';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ngx-what-if',
  templateUrl: './what-if.component.html',
  styleUrls: ['./what-if.component.scss'],
})
export class WhatIfComponent implements OnInit, AfterViewInit, OnDestroy {
  data;
  opened = this.whatIfService.opened;
  selected = this.whatIfService.selected;
  loading = this.whatIfService.loading;
  mainWork: WorkDto;
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private whatIfService: WhatIfService) {
  }

  ngOnInit(): void {
    this.whatIfService.needToUpdate.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.fetchData());
  }

  onDataFetched() {
    setTimeout(() =>
        document.getElementsByTagName('nb-card-body')[0].scrollTo(100000 * 100000, 100000 * 100000),
      100,
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.fetchData();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private fetchData(): void {
    this.whatIfService.getMain().pipe(takeUntil(this.unsubscribe$)).subscribe(result => this.mainWork = result);
  }
}
