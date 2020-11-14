import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbDateService} from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  min: Date;
  max: Date;
  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';

  types: string[] = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

  ngOnInit(): void {
  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }
}
