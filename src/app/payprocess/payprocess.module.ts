import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
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
  schemas: [
CUSTOM_ELEMENTS_SCHEMA,
NO_ERRORS_SCHEMA
  ],
  declarations: [PayprocessPage]
})
export class PayprocessPageModule {}
