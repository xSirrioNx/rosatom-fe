import {Injectable} from '@angular/core';
import {Observable, of as observableOf} from 'rxjs';
import {PeriodsService} from './periods.service';
import {TrafficBar, TrafficBarData} from '../data/traffic-bar';

@Injectable()
export class TrafficBarService extends TrafficBarData {

  private data = {};

  constructor(private period: PeriodsService) {
    super();
    this.data = {
      week: this.getDataForWeekPeriod(),
      month: this.getDataForMonthPeriod(),
      year: this.getDataForYearPeriod(),
    };
  }

  getDataForWeekPeriod(): TrafficBar {
    return {
      data: [10, 15, 19, 7, 20, 13, 15],
      labels: this.period.getWeeks(),
      formatter: '{c0} $',
    };
  }

  getDataForMonthPeriod(): TrafficBar {
    return {
      data: [
        0.5 * 1000,
        0.3 * 1000,
        0.8 * 1000,
        0.2 * 1000,
        0.3 * 1000,
        0.7 * 1000,
        0.8 * 1000,
        1000,
        0.7 * 1000,
        0.8 * 1000,
        0.6 * 1000,
        0.7 * 1000],
      labels: this.period.getMonths(),
      formatter: '{c0} $',
    };
  }

  getDataForYearPeriod(): TrafficBar {
    return {
      data: [10 * 1000, 15 * 1000, 19 * 1000, 7 * 1000, 20 * 1000, 13 * 1000, 15 * 1000, 19 * 1000, 11 * 1000],
      labels: this.period.getYears(),
      formatter: '{c0} $',
    };
  }

  getTrafficBarData(period: string): Observable<TrafficBar> {
    return observableOf(this.data[period]);
  }
}
