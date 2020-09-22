import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
  {
     path: 'tabuserpost',
     loadChildren: () => import('../tabuserpost/tabuserpost.module').then( m => m.TabuserpostPageModule)
   },
     {
       path: 'tabmorepost',
       loadChildren: () => import('../tabmorepost/tabmorepost.module').then( m => m.TabmorepostPageModule)
     },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
