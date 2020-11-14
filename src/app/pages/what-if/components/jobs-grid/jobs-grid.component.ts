import {Component, Input, OnInit} from '@angular/core';
import {WhatIfService} from '../../what-if.service';

@Component({
  selector: 'ngx-jobs-grid',
  templateUrl: './jobs-grid.component.html',
  styleUrls: ['./jobs-grid.component.scss'],
})
export class JobsGridComponent implements OnInit {
  @Input() data: any[];
  @Input() parentId;
  @Input() levelSum;
  @Input() depthLevel;
  selected = this.whatIfService.selected;
  opened = this.whatIfService.opened;
  parent;
  mockData;

  constructor(private whatIfService: WhatIfService) {
  }

  ngOnInit(): void {
    this.whatIfService.mockData.subscribe(x => this.mockData = x);
    if (this.parentId) {
      this.parent = this.mockData.find(x => x.id === this.parentId);
      this.whatIfService.getNodes(this.parent.id).subscribe(x => console.log(x));
    } else {
      this.whatIfService.getNodes(null).subscribe(x => console.log(x));
    }
  }

  /*onClick(id) {
    if (id !== this.whatIfService.selected.getValue()) {
      this.whatIfService.selected.next(id);
    } else {
      this.whatIfService.selected.next(null);
    }
  }*/

  onOpenClick(id: any, e) {
    this.whatIfService.selected.next(id);
    e.stopPropagation();
    const newValue = this.whatIfService.opened.getValue();
    const lastId = newValue[newValue.length - 1];
    if (lastId !== id) {
      if (lastId !== this.parentId && newValue.length !== this.depthLevel + 1) {
        newValue.length = this.depthLevel + 1;
      }
      newValue.push(id);
    } else {
      newValue.length = newValue.length - 1;
    }

    this.whatIfService.opened.next(newValue);
  }

  trackByFn(index, item) {
    return item.id + item.currentCost; // unique id corresponding to the item
  }
}
