import { Component, Injectable, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { User } from '../dauth.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { exit } from 'process';
// // // // // // // // // // 
import { Platform } from "@ionic/angular";
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from "@ionic-native/status-bar/ngx";
//import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
// import { timer } from "rxjs/observable/timer";
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage{
// form: FormGroup;
  // userDetails: User[]=[];
  tabBarElement: any;
  splash = true;
  email: string;
  password: string;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }];

  constructor(
    private firebaseAuth: AngularFireAuth,
    private http: HttpClient, 
    private AuthService: AuthService, 
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService) { }
    
signup() {
  this.authService.signup(this.email, this.password);
  this.email = this.password = '';
}
andar(){
  if(this.email == "1910"){
    this.router.navigate(['../choosescreen/feed-admin/']);
  }
  else{
    console.log('Maza nahi aaya!');
  }
}
login() {
  this.authService.login(this.email, this.password);
  this.email = this.password = '';   
  // this.router.navigate(['../admin-login/choosescreen/']); 
  this.router.navigate(['/majorfeed']);
}
logsout() {
  this.authService.logout();
}

ionViewWillEnter() {
    //this.firebaseAuth.signOut();
    this.router.navigate(['./admin-login/']);
}

NaviateToSignUp() {
  this.router.navigate(['../register']); 
}

}
