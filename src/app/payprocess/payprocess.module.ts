import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayprocessPageRoutingModule } from './payprocess-routing.module';

import { PayprocessPage } from './payprocess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayprocessPageRoutingModule
  ],
  declarations: [PayprocessPage]
})
export class PayprocessPageModule {}
