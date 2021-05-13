import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedCommuterPageRoutingModule } from './feed-commuter-routing.module';

import { FeedCommuterPage } from './feed-commuter.page';
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
    FeedCommuterPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    SuperTabsModule,
     Ng2SearchPipeModule
  ],
  schemas: [
NO_ERRORS_SCHEMA,
  ],
  declarations: [FeedCommuterPage]
})
export class FeedCommuterPageModule {}
