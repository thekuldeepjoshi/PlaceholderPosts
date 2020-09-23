import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TabuserpostPageRoutingModule } from './tabuserpost-routing.module';

import { TabuserpostPage } from './tabuserpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabuserpostPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [TabuserpostPage]
})
export class TabuserpostPageModule {}
