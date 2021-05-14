import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  declarations: [PayforwardPage]
})
export class PayforwardPageModule {}
