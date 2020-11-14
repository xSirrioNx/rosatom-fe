import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-traffic-cards-header',
  styleUrls: ['./costs-cards-header.component.scss'],
  templateUrl: './costs-cards-header.component.html',
})
export class CostsCardsHeaderComponent implements OnDestroy {
  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';

  types: string[] = ['Неделя', 'Месяц', 'Год'];
  currentTheme: string;
  get realPeriod(): string {
    switch (this.type) {
      case 'week':
        return 'Неделя';
      case 'month':
        return 'Месяц';
      case 'year':
        return 'Год';
    }
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  changePeriod(period: string): void {
    let result;
    switch (period) {
      case 'Неделя':
        result = 'week';
        break;
      case 'Месяц':
        result = 'month';
        break;
      case 'Год':
        result = 'year';
        break;
    }
    this.type = result;
    this.periodChange.emit(result);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
