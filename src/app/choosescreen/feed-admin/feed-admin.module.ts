import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedAdminPageRoutingModule } from './feed-admin-routing.module';

import { FeedAdminPage } from './feed-admin.page';
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
    FeedAdminPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    SuperTabsModule,
    Ng2SearchPipeModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
  declarations: [FeedAdminPage]
})
export class FeedAdminPageModule {}
