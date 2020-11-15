import {Component, OnDestroy, OnInit} from '@angular/core';
import {WhatIfService} from '../../what-if.service';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {WorkDto} from '../../models/work.dto';
import {NbDialogService, NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {Subject} from 'rxjs';

@Component({
  selector: 'ngx-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss'],
})
export class JobInfoComponent implements OnInit, OnDestroy {
  selected = this.whatIfService.selected;
  item: WorkDto;
  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private whatIfService: WhatIfService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {
  }

  ngOnInit(): void {
    // this.whatIfService.mockData.subscribe(x => this.data = x);
    this.selected.pipe(distinctUntilChanged(), takeUntil(this.unsubscribe$)).subscribe(value => {
      this.item = value;
    });

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onEditClick() {
    this.dialogService.open(EditDialogComponent, {context: {item: this.item}})
      .onClose.subscribe(data => {
        if (!data) {
          return;
        }
        this.whatIfService.updateNode(data).pipe(takeUntil(this.unsubscribe$)).subscribe(
          () => {
            if (data.factStartDate) {
              this.item.factStartDate = data.factStartDate;
            }
            if (data.newPlannedStartDate) {
              this.item.newPlannedStartDate = data.newPlannedStartDate;
            }
            this.toastrService.show('Изменения сохранены', this.item.jobName, {
              status: 'success',
              destroyByClick: true,
              duration: 2000,
              hasIcon: true,
              position: NbGlobalPhysicalPosition.TOP_RIGHT,
            });
            this.whatIfService.needToUpdate.next();
          },
          () => {
            this.toastrService.show('Ошибка сохранения', this.item.jobName, {
              status: 'danger',
              destroyByClick: true,
              duration: 2000,
              hasIcon: true,
              position: NbGlobalPhysicalPosition.TOP_RIGHT,
            });
          },
        );
      },
    );
  }
}
