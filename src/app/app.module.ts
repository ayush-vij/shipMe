import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SuperTabsModule} from "@ionic-super-tabs/angular"
//import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { HttpClientModule } from '@angular/common/http';

import { DataplayService } from '../app/choosescreen/dataplay.service';
import { DatePipe } from '@angular/common';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { DAuthService } from './dauth.service';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFirestoreModule,
    AngularFireStorageModule,
    // firebase.initialiseApp(environment.firebase),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    HttpClientModule, 
    AppRoutingModule, 
    SuperTabsModule.forRoot()],
  providers: [
    DAuthService,
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    DatePipe,
    DataplayService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
