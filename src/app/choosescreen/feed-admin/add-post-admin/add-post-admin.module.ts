import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostAdminPageRoutingModule } from './add-post-admin-routing.module';

import { AddPostAdminPage } from './add-post-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostAdminPageRoutingModule
  ],
  schemas: [
CUSTOM_ELEMENTS_SCHEMA,
NO_ERRORS_SCHEMA
  ],
  declarations: [AddPostAdminPage]
})
export class AddPostAdminPageModule {}
