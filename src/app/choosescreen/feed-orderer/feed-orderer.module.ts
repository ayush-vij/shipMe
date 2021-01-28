import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedOrdererPageRoutingModule } from './feed-orderer-routing.module';

import { FeedOrdererPage } from './feed-orderer.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedOrdererPageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [FeedOrdererPage]
})
export class FeedOrdererPageModule {}
