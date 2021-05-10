import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';


import { FormatFileSizePipe } from './format-file-size.pipe';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, FormatFileSizePipe]
})
export class RegisterPageModule {}
