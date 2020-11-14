import { Injectable } from '@angular/core';

@Injectable()
export class PeriodsService {
  getYears() {
    return [
      '2020', '2019', '2018',
      '2017', '2016', '2015',
      '2014', '2013', '2012',
    ];
  }

  getMonths() {
    return [
      'Янв', 'Фев', 'Мар',
      'Апр', 'Май', 'Июн',
      'Июл', 'Авг', 'Сен',
      'Окт', 'Ноя', 'Дек',
    ];
  }

  getWeeks() {
    return [
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб',
      'Вс',
    ];
  }
}
