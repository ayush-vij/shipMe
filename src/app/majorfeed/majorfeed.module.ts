import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajorfeedPageRoutingModule } from './majorfeed-routing.module';

import { MajorfeedPage } from './majorfeed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajorfeedPageRoutingModule
  ],
  declarations: [MajorfeedPage]
})
export class MajorfeedPageModule {}
