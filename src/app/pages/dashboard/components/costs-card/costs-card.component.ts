import {Component, Input, OnDestroy} from '@angular/core';
import {takeWhile} from 'rxjs/operators';
import {TrafficBar, TrafficBarData} from '../../../../@core/data/traffic-bar';
import {TrafficList, TrafficListData} from '../../../../@core/data/traffic-list';

@Component({
  selector: 'ngx-costs-card',
  styleUrls: ['./costs-card.component.scss'],
  templateUrl: './costs-card.component.html',
})
export class CostsCardComponent implements OnDestroy {
  trafficBarData: TrafficBar;
  trafficListData: TrafficList;
  revealed = false;
  private alive = true;

  constructor(private trafficListService: TrafficListData,
              private trafficBarService: TrafficBarData) {
    this.getTrafficFrontCardData(this.period);
    this.getTrafficBackCardData(this.period);
  }

  period = 'week';

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAndGetData(value: string): void {
    this.period = value;

    this.getTrafficFrontCardData(value);
    this.getTrafficBackCardData(value);
  }

  getTrafficBackCardData(period: string) {
    this.trafficBarService.getTrafficBarData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(trafficBarData => {
        this.trafficBarData = trafficBarData;
      });
  }

  getTrafficFrontCardData(period: string) {
    this.trafficListService.getTrafficListData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(trafficListData => {
        this.trafficListData = trafficListData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
