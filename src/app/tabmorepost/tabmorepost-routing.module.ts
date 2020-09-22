import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmorepostPage } from './tabmorepost.page';

const routes: Routes = [
  {
    path: '',
    component: TabmorepostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmorepostPageRoutingModule {}
