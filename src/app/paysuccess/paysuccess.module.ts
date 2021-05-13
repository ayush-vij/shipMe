import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaysuccessPageRoutingModule } from './paysuccess-routing.module';

import { PaysuccessPage } from './paysuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaysuccessPageRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [PaysuccessPage]
})
export class PaysuccessPageModule {}
