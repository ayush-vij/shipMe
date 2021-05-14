import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { Firebase  } from '@ionic-native/firebase';
import { ServiceWorkerModule } from '@angular/service-worker';

firebase.initializeApp({
  apiKey: "AIzaSyCRqbNvvvm-L3jfTHh8WmcJCbyneh7yHMo",
    authDomain: "postship-2c320.firebaseapp.com",
    databaseURL: "https://postship-2c320-default-rtdb.firebaseio.com",
    projectId: "postship-2c320",
    storageBucket: "postship-2c320.appspot.com",
    messagingSenderId: "616220357262",
    appId: "1:616220357262:web:d6c1e4eb8159903afa0fdf",
    measurementId: "G-LD2YLVPGQX"
})

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
    SuperTabsModule.forRoot(), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    DAuthService,
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    DatePipe,
    DataplayService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas:[
CUSTOM_ELEMENTS_SCHEMA,
  ],  bootstrap: [AppComponent]
})
export class AppModule {

  
}
