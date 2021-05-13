import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedOrdererPageRoutingModule } from './feed-orderer-routing.module';

import { FeedOrdererPage } from './feed-orderer.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

// ADDING SEARCH FILTER
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedOrdererPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    SuperTabsModule,
     Ng2SearchPipeModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA,
  ],
  declarations: [FeedOrdererPage]
})
export class FeedOrdererPageModule {}
