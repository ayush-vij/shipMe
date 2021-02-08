import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from "@ionic-native/status-bar/ngx";
//import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
// import { timer } from "rxjs/observable/timer";
// import { AuthService } from './service/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})



export class AppComponent {
 
  tabBarElement: any;
  splash = true;

  // email: string;
  // password: string;

  // public appPages = [
  //   {
  //     title: 'Home',
  //     url: '/home',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'List',
  //     url: '/list',
  //     icon: 'list'
  //   }
  // ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private screenOrientation: ScreenOrientation

    // public authService: AuthService
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

  // signup() {
  //   this.authService.signup(this.email, this.password);
  //   this.email = this.password = '';
  // }

  // login() {
  //   this.authService.login(this.email, this.password);
  //   this.email = this.password = '';    
  // }

  // logout() {
  //   this.authService.logout();
  // }
  
}
