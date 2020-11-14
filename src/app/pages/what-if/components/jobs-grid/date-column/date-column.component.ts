import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {WorkDto} from '../../../models/work.dto';

@Component({
  selector: 'ngx-date-column',
  templateUrl: './date-column.component.html',
  styleUrls: ['./date-column.component.scss'],
})
export class DateColumnComponent implements ViewCell, OnInit {
  @Input() value: string | number;
  @Input() rowData: WorkDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
