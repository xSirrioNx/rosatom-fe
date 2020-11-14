import {Component, OnInit} from '@angular/core';
import {WhatIfService} from '../what-if.service';

@Component({
  selector: 'ngx-what-if',
  templateUrl: './what-if.component.html',
  styleUrls: ['./what-if.component.scss'],
})
export class WhatIfComponent implements OnInit {
  data;
  opened = this.whatIfService.opened;
  selected = this.whatIfService.selected;
  loading = this.whatIfService.loading;

  constructor(private whatIfService: WhatIfService) {
  }

  ngOnInit(): void {
    // this.data = this.whatIfService.mockData;
  }

  getData(item: any) {
    return this.data.filter(x => x.parentIds.includes(item)).sort((a, b) =>
      ((b.currentCost + b.childrenCost) / this.getLevelSum(b)) -
      ((a.currentCost + a.childrenCost) / this.getLevelSum(a)));
  }

  getLevelSum(item: number) {
    return this.getData(item).reduce((sum, x) => (sum + x.currentCost + x.childrenCost), 0);
  }
}
