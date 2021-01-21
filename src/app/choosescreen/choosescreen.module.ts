import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosescreenPageRoutingModule } from './choosescreen-routing.module';

import { ChoosescreenPage } from './choosescreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosescreenPageRoutingModule
  ],
  declarations: [ChoosescreenPage]
})
export class ChoosescreenPageModule {}
