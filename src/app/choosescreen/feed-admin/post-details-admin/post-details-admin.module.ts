import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostDetailsAdminPageRoutingModule } from './post-details-admin-routing.module';

import { PostDetailsAdminPage } from './post-details-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostDetailsAdminPageRoutingModule
  ],
  declarations: [PostDetailsAdminPage]
})
export class PostDetailsAdminPageModule {}
