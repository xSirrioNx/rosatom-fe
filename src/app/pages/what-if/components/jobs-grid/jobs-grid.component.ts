import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WhatIfService} from '../../what-if.service';
import {WorkDto} from '../../models/work.dto';
import {LocalDataSource} from 'ng2-smart-table';
import {StatusColumnComponent} from './status-column/status-column.component';
import {DateColumnComponent} from './date-column/date-column.component';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'ngx-jobs-grid',
  templateUrl: './jobs-grid.component.html',
  styleUrls: ['./jobs-grid.component.scss'],
})
export class JobsGridComponent implements OnInit, AfterViewInit {
  @Input() parent: WorkDto;
  @Input() levelSum = 1;
  @Input() depthLevel;
  @Output() dataFetched: EventEmitter<any> = new EventEmitter();
  selected = this.whatIfService.selected;
  opened = this.whatIfService.opened;
  mockData;
  data: WorkDto[] = [];
  source: LocalDataSource = new LocalDataSource();

  tableSettings = {
    actions: null,
    columns: {
      totalCost: {
        title: 'Статус',
        editable: false,
        type: 'custom',
        renderComponent: StatusColumnComponent,
        filter: false,
      },
      jobName: {
        title: 'Работа',
        filter: true,
        type: 'string',
        editable: false,
      },
      addedCost: {
        title: 'Текущая стоимость',
        filter: false,
        type: 'number',
        editable: false,
      },
      addedChildrenCost: {
        title: 'Стоимость зависимых работ',
        filter: false,
        type: 'number',
        editable: false,
      },
      newAddedCost: {
        title: 'Возможная стоимость',
        filter: false,
        type: 'number',
        editable: false,
      },
      newAddedChildrenCost: {
        title: 'Возможная стоимость зависимых работ',
        filter: false,
        type: 'number',
        editable: false,
      },
      factStartDate: {
        title: 'Фактическая дата старта',
        filter: false,
        type: 'custom',
        editable: false,
        renderComponent: DateColumnComponent,
        filterFunction: (dir, a, b) => {
          return dir ? a.getTime() - b.getTime() : b.getTime() - a.getTime();
        },
      },
    },
  };

  constructor(private whatIfService: WhatIfService) {
  }

  ngOnInit(): void {
  }

  onOpenClick(item: WorkDto, e?) {
    this.whatIfService.selected.next(item);
    if (e) {
      e.stopPropagation();
    }
    const newValue = this.whatIfService.opened.getValue();
    const lastId = newValue[newValue.length - 1];
    if (lastId !== item.id) {
      if (lastId !== this.parent.id && newValue.length !== this.depthLevel + 1) {
        newValue.length = this.depthLevel + 1;
      }
      newValue.push(item);
    } else {
      newValue.length = newValue.length - 1;
    }

    this.whatIfService.opened.next(newValue);
  }

  trackByFn(index, item) {
    return item.id + item.currentCost; // unique id corresponding to the item
  }

  isOpened(item: WorkDto) {
    return this.opened.getValue().map(x => x.id).includes(item.id);
  }

  onRowSelect($event: any) {
    this.onOpenClick($event.data);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.whatIfService.getNodes(this.parent.id).subscribe(result => {
        this.data = result;
        if (result.length > 250) {
          const levelCost = result.reduce((sum, next) => sum + next.totalCost, 0);
          result.forEach(y => {
            y.levelCost = levelCost;
          });
          this.source.load(result);
        }
        this.dataFetched.emit(null);
      });
    });
  }
}
