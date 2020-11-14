import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WhatIfComponent} from './what-if/what-if.component';

const routes: Routes = [{
  path: '',
  component: WhatIfComponent,
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatIfRoutingModule {
}
