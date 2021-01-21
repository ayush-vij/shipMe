import { Component, OnInit } from '@angular/core';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private splashScreen: SplashScreen) { }
}