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

import { ToastController } from '@ionic/angular';

// import { Camera, CameraOptions } from '@ionic-native/core/decorators/cordova';
import { CameraOptions, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  // form: FormGroup;
  tabBarElement: any;
  splash = true;
  pp: ImageBitmap;
  fname: string;
  email: string;
  password: string;
  repassword: string;

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
    public authService: AuthService,
    public toastController: ToastController,
   // private camera: Camera,
  ) { }

  // const options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  
  // this.camera.getPicture(Option).then((imageData) => {
  //  // imageData is either a base64 encoded string or a file URI
  //  // If it's base64 (DATA_URL):
  //  let base64Image = 'data:image/jpeg;base64,' + imageData;
  // }, (err) => {
  //  // Handle error
  // });

  /////////////////////////////////

  pwcheck(){
    if (this.password == this.repassword){
      this.signup();
    }
    else{
      this.resetpw();
      this.pwerror();
    }
  }

  
    
  signup() {
    //this.authService.signup(this.fname, this.email, this.password, this.repassword);
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }
  
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';   
  }
  logsout() {
    this.authService.logout();
  }
  
  ionViewWillEnter() {
      this.firebaseAuth.signOut();
  }

  async pwerror() {
    const toast = await this.toastController.create({
      message: 'The passwords do not match, please try again!',
      duration: 4000
    });
    toast.present();
  }

  resetpw(){
    this.password = null;
    this.repassword = null;
  }

  NaviateToLogIn() {
    this.router.navigate(['../login']); 
  }
  }