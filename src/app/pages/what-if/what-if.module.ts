import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhatIfComponent} from './what-if/what-if.component';
import {JobsGridComponent} from './components/jobs-grid/jobs-grid.component';
import {JobInfoComponent} from './components/job-info/job-info.component';
import {WhatIfRoutingModule} from './what-if-routing.module';
import {NbCardModule, NbIconModule, NbSidebarModule} from '@nebular/theme';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [WhatIfComponent, JobsGridComponent, JobInfoComponent],
  imports: [
    CommonModule,
    WhatIfRoutingModule,
    NbCardModule,
    NbIconModule,
    NbSidebarModule,
    HttpClientModule,
  ],
})
export class WhatIfModule {
}
