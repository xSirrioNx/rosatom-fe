import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {WorkDto} from '../../../models/work.dto';

@Component({
  selector: 'ngx-status-column',
  templateUrl: './status-column.component.html',
  styleUrls: ['./status-column.component.scss'],
})
export class StatusColumnComponent  implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: WorkDto;

  constructor() { }

  ngOnInit(): void {
  }

}
