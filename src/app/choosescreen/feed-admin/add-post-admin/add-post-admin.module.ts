import { NgModule } from '@angular/core';
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
  declarations: [AddPostAdminPage]
})
export class AddPostAdminPageModule {}
