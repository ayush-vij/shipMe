import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedCommuterPageRoutingModule } from './feed-commuter-routing.module';

import { FeedCommuterPage } from './feed-commuter.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedCommuterPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    SuperTabsModule,
  ],
  declarations: [FeedCommuterPage]
})
export class FeedCommuterPageModule {}
