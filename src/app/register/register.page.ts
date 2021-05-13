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
import { DAuthService } from '../dauth.service';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface imgFile {
  name: string;
  filepath: string;
  size: number; }

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // form: FormGroup;
  tabBarElement: any;
  splash = true;
  pp: ImageBitmap;
  fname: string;
  email: string;
  password: string;
  repassword: string;
  form: FormGroup;


  // File upload task 
  fileUploadTask: AngularFireUploadTask;
  // Upload progress
  percentageVal: Observable<number>;
  // Track file uploading with snapshot
  trackSnapshot: Observable<any>;
  // Uploaded File URL
  UploadedImageURL: Observable<string>;
  // Uploaded image collection
  files: Observable<imgFile[]>;
  // Image specifications
  imgName: string;
  imgSize: number;
  // File uploading status
  isFileUploading: boolean;
  isFileUploaded: boolean;

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

    private filesCollection: AngularFirestoreCollection<imgFile>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private http: HttpClient, 
    private AuthService: AuthService, 
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    private dauth: DAuthService,
    public toastController: ToastController,
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
   // private camera: Camera,
  ) 
  {
    this.isFileUploading = false;
    this.isFileUploaded = false;
    
    // Define uploaded files collection
    this.filesCollection = afs.collection<imgFile>('imagesCollection');
    this.files = this.filesCollection.valueChanges();
  }

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

 

  ///////////////////////////
  

  ngOnInit() {
    this.form = new FormGroup({
      // 'pp': new FormControl(null,{
      //   updateOn: 'blur',
      // //  validators: [Validators.required]
      // }),
      'fname': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'email': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(2)]
      }),
      'password': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'repassword': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  onNewPost(){
    console.log(this.form);
    this.dauth.newUser(
      //this.form.value.pp,
      this.form.value.fname,
      this.form.value.email,
      this.form.value.password,
      this.form.value.repassword,
    );
    this.form.reset();
  }

pwcheck(){
   console.log(this.form.value.email);
   console.log(this.form.value.password);
  if (this.form.value.password == this.form.value.repassword){
    this.signup();
  }
  else{
    this.resetpw();
    this.pwerror();
  }
}
  
signup() {
  //this.authService.signup(this.fname, this.email, this.password, this.repassword);
  this.authService.signup(this.form.value.email, this.form.value.password);
  this.onNewPost();
  this.form.value.email = this.form.value.password = '';
  
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
}}
  ////////////////////////
