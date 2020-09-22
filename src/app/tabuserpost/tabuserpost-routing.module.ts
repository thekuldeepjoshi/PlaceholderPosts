import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabuserpostPage } from './tabuserpost.page';

const routes: Routes = [
  {
    path: '',
    component: TabuserpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabuserpostPageRoutingModule {}
