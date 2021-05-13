import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayforwardPageRoutingModule } from './payforward-routing.module';

import { PayforwardPage } from './payforward.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayforwardPageRoutingModule
  ],
  declarations: [PayforwardPage]
})
export class PayforwardPageModule {}
