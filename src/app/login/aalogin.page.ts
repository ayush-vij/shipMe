import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../auth.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { exit } from 'process';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  userDetails: User[]=[];
  constructor(private http: HttpClient, private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'lemail': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]}),
      'lpwd': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]}),
      });
  //   this.http.get('https://inkSell-ayush.firebaseio.com/newUser.json')
  //   this.form = new FormGroup({
  //     'email': new FormControl(null,{
  //       updateOn: 'blur',
  //       validators: [Validators.required, Validators.email]
  //     }),
  //     'pwd': new FormControl(null,{
  //       updateOn: 'blur',
  //       validators: [Validators.required, Validators.minLength(8)]
  //     }),
  //   });
  //  this.AuthService.checkUser();
  // this.userDetails = this.AuthService.checkUser();
  // console.log(this.userDetails);
  }

  checkUser(){
    var newVar: User[]=[];
  this.http.get('https://inkSell-ayush.firebaseio.com/newUser.json')
  .subscribe(
    response => {
      for (const key in response){
        newVar.push(
          new User(
            key,
            response[key].fname,
            response[key].lname,
            response[key].email,
            response[key].pwd,
          )
        );
        if(response[key].email === this.form.value.lemail && response[key].pwd === this.form.value.lpwd){
          console.log("Logeed in!");
          this.router.navigate(['/hello']);
        }
        else{
          console.log(this.form.value.lemail);
          console.log(this.form.value.lpwd);
          console.log("Nope");
        }  
      }
    }
  );
  // this.form.reset();
  
  }

}
