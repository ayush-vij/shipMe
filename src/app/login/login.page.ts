import { Component, Injectable, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { User } from '../auth.model';
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


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
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
    private http: HttpClient, 
    private AuthService: AuthService, 
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService) { }
//   ionViewWillEnter(){
//     this.userDetails = this.loadUser();
//     console.log(this.userDetails);  
//   }
//   ngOnInit() {
    
//     this.form = new FormGroup({
//       'lemail': new FormControl(null,{
//         updateOn: 'blur',
//         validators: [Validators.required]}),
//       'lpwd': new FormControl(null,{
//         updateOn: 'blur',
//         validators: [Validators.required]}),
//       });
//       this.form.reset();
//     this.http.get('https://ship-6ba1e-default-rtdb.firebaseio.com/newUser.json')
//     // this.form = new FormGroup({
//     //   'email': new FormControl(null,{
//     //     updateOn: 'blur',
//     //     validators: [Validators.required, Validators.email]
//     //   }),
//     //   'pwd': new FormControl(null,{
//     //     updateOn: 'blur',
//     //     validators: [Validators.required, Validators.minLength(8)]
//     //   }),
//     //});
//   //  this.AuthService.checkUser();
//   // this.userDetails = this.AuthService.checkUser();
//   // console.log(this.userDetails);
// }


//   loadUser(){
//     var newVar: User[]=[];
//     this.http.get('https://ship-6ba1e-default-rtdb.firebaseio.com/newUser.json')
//     .subscribe(
//       response => {
//         for (const key in response){
//           newVar.push(
//             new User(
//               key,
//               response[key].fname,
//               response[key].lname,
//               response[key].email,
//               response[key].pwd,
//             )
//           );
//           console.log("User: " +response[key].email);
//           console.log("Password: " +response[key].pwd);
//         }
        
//       }
//     );
//     return(newVar);
//   }

//   checkUser() {
//         if(this.IsUserValid(this.form.value.lemail,this.form.value.lpwd)){
//           console.log("Logged in!");
//           this.router.navigate(['/choosescreen']);
//         }
//         else{
//           console.log(this.form.value.lemail);
//           console.log(this.form.value.lpwd);
//           console.log("Nope");
//         } 
//   }
  
//   //return true when the input emails and pwd can match to one of the element in userDetails. 
//   IsUserValid(email: string, pwd: string){
//     return this.userDetails.find(p => {
//       return p.email === email && p.pwd === pwd;
//     });

//   }
signup() {
  this.authService.signup(this.email, this.password);
  this.email = this.password = '';
}

login() {
  this.authService.login(this.email, this.password);
  this.email = this.password = '';   
  this.router.navigate(['../choosescreen/']); 
}
logsout() {
  this.authService.logout();
}

ionViewDidLoad() {
  this.authService.logout();
}
}
