import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhatIfComponent} from './what-if/what-if.component';
import {JobsGridComponent} from './components/jobs-grid/jobs-grid.component';
import {JobInfoComponent} from './components/job-info/job-info.component';
import {WhatIfRoutingModule} from './what-if-routing.module';
import {
  NbButtonModule,
  NbCardModule, NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbSidebarModule,
  NbSpinnerModule
} from '@nebular/theme';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { StatusColumnComponent } from './components/jobs-grid/status-column/status-column.component';
import { DateColumnComponent } from './components/jobs-grid/date-column/date-column.component';
import {ThemeModule} from '../../@theme/theme.module';
import {MatRippleModule} from '@angular/material/core';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [WhatIfComponent, JobsGridComponent, JobInfoComponent, StatusColumnComponent, DateColumnComponent, EditDialogComponent],
  imports: [
    CommonModule,
    WhatIfRoutingModule,
    NbCardModule,
    NbIconModule,
    NbSidebarModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NbSpinnerModule,
    NbButtonModule,
    MatRippleModule,
    NbInputModule,
    NbDatepickerModule,
    ReactiveFormsModule,
  ],
})
export class WhatIfModule {
}
