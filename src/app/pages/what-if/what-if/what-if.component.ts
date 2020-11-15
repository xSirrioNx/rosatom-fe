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
  }

  onDataFetched() {
    setTimeout(() =>
        document.getElementsByTagName('nb-card-body')[0].scrollTo(100000 * 100000, 100000 * 100000),
      100,
    );
  }
}
