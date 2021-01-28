import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from "@ionic-native/status-bar/ngx";
//import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
// import { timer } from "rxjs/observable/timer";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})



export class AppComponent {
 
  tabBarElement: any;
  splash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setTimeout(() => {
        this.splash = false;
      }, 0);
    });
    // // get current screen orientation
    // console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // // lock to portait screen orientation
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    // // // allow user rotate
    // // this.screenOrientation.lock();
  }
}
