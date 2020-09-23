import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TabmorepostPageRoutingModule } from './tabmorepost-routing.module';

import { TabmorepostPage } from './tabmorepost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabmorepostPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [TabmorepostPage]
})
export class TabmorepostPageModule {}
