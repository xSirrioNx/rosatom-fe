import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WhatIfComponent} from '../what-if/what-if/what-if.component';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
