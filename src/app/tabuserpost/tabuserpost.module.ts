import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabuserpostPageRoutingModule } from './tabuserpost-routing.module';

import { TabuserpostPage } from './tabuserpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabuserpostPageRoutingModule
  ],
  declarations: [TabuserpostPage]
})
export class TabuserpostPageModule {}
