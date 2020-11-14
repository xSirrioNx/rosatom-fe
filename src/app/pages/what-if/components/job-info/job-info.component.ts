import { Component, OnInit } from '@angular/core';
import {WhatIfService} from '../../what-if.service';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'ngx-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss'],
})
export class JobInfoComponent implements OnInit {

  selected = this.whatIfService.selected;
  data;
  item;
  constructor( private whatIfService: WhatIfService) { }

  ngOnInit(): void {
    this.whatIfService.mockData.subscribe(x => this.data = x);
    this.selected.pipe(distinctUntilChanged()).subscribe(value => {
      this.item = this.data.find(x => x.id === value)
    });

  }

  onEditClick() {
    const old = this.whatIfService.mockData.getValue();
    let toChange = old.find(x => x.id === 4);
    toChange.oldChildrenCost = toChange.childrenCost;
    toChange.childrenCost = toChange.childrenCost + 100000;
    toChange.oldCurrentCost = toChange.currentCost;
    toChange.currentCost = toChange.currentCost + 100000;

    toChange = old.find(x => x.id === 25);
    toChange.oldChildrenCost = toChange.childrenCost;
    toChange.childrenCost = toChange.childrenCost + 100000;
    toChange.oldCurrentCost = toChange.currentCost;
    toChange.currentCost = toChange.currentCost + 100000;

    toChange = old.find(x => x.id === 167);
    toChange.oldChildrenCost = toChange.childrenCost;
    toChange.childrenCost = toChange.childrenCost + 10000;
    toChange.oldCurrentCost = toChange.currentCost;
    toChange.currentCost = toChange.currentCost + 10000;

    toChange = old.find(x => x.id === 10);
    toChange.oldChildrenCost = toChange.childrenCost;
    toChange.childrenCost = toChange.childrenCost + 100000;
    toChange.oldCurrentCost = toChange.currentCost;
    toChange.currentCost = toChange.currentCost + 100000;
    this.whatIfService.mockData.next(old);
  }

  onResetClick() {
    this.whatIfService.mockData.next(this.whatIfService.MOCK_DATA);
  }
}
