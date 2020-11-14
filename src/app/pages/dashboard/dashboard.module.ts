import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {
  NbAccordionModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSelectModule,
} from '@nebular/theme';
import {FormsModule as ngFormsModule} from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';
import {ChartjsPieComponent} from './components/chartjs-pie.component';
import {CostsBarChartComponent} from './components/costs-card/back-side/costs-bar-chart.component';
import {CostsBackCardComponent} from './components/costs-card/back-side/costs-back-card.component';
import {CostsFrontCardComponent} from './components/costs-card/front-side/costs-front-card.component';
import {CostsCardsHeaderComponent} from './components/costs-card/costs-cards-header/costs-cards-header.component';
import {CostsCardComponent} from './components/costs-card/costs-card.component';
import {CostsBarComponent} from './components/costs-card/front-side/costs-bar/costs-bar.component';
import {ChartModule} from 'angular2-chartjs';


@NgModule({
  declarations: [
    DashboardComponent,
    CostsCardComponent,
    CostsBarChartComponent,
    CostsFrontCardComponent,
    CostsBackCardComponent,
    CostsBarComponent,
    CostsCardsHeaderComponent,
    ChartjsPieComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbDatepickerModule,
    NbInputModule,
    NbCardModule,
    ngFormsModule,
    NbSelectModule,
    NbIconModule,
    NbListModule,
    NgxEchartsModule,
    ChartModule,
    NbAccordionModule,
  ],
})
export class DashboardModule {
}
