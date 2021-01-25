import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedCommuterPageRoutingModule } from './feed-commuter-routing.module';

import { FeedCommuterPage } from './feed-commuter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedCommuterPageRoutingModule
  ],
  declarations: [FeedCommuterPage]
})
export class FeedCommuterPageModule {}
