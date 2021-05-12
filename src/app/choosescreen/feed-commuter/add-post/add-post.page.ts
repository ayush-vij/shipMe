import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../dauth.model';
import { DataplayService } from '../../dataplay.service'
import {WindowService} from '../../../service/window.service';
import { environment } from 'src/environments/environment';

import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  form: FormGroup;
  user: User[];

  windowRef:any;
  prefix:any;
  line:any;
  verifCode:String;
  

  constructor(private router: Router, private dataplayService: DataplayService, private http: HttpClient,public windowService : WindowService,
    private alertController: AlertController,) { }


  async ionViewWillEnter() {
    
    // this.postdata=this.dataplayService.fetchPostData();
    // console.log(this.postdata);
    firebase.initializeApp(environment.firebase)
    this.windowRef=await this.windowService.windowRef;
    this.windowRef.recaptchaVerifier=await new firebase.auth.RecaptchaVerifier('recaptcha-container');
    await this.windowRef.recaptchaVerifier.render()

  }

  sendLoginCode(){
    //Make sure phone number in e164 format
       const num = this.prefix.toString() + this.line.toString();
       const appVerifier=this.windowRef.recaptchaVerifier;
       firebase.auth().signInWithPhoneNumber(num,appVerifier)
       .then(result=>{
       this.windowRef.confirmationResult=result;
       this.otpprompt();
       }).catch(err=>console.log('err1',err))
    }

    submitVerif(code){
      var code;
     // verifCode = verifCode.toString();
      // console.log(verifCode.value);
      // console.log(typeof(verifCode));
      this.windowRef.confirmationResult.confirm(code)
      .then(result=>{
        console.log(result);
        this.onNewPost();
      })
      .catch(err=>{
       console.log('err2',err)
      });}

   
  ngOnInit() {
    this.dataplayService.fetchUser();
    this.form = new FormGroup({
      'name': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'custype': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'travelfrom': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'travelcity': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(2)]
      }),
      'travelto': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'traveltocity': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(2)]
      }),
      'booked': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'email': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(2)]
      }),
      'intcode': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'phone': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(9), Validators.maxLength(10)]
      }),
      'traveldate': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  otpprompt() {
    this.alertController.create({
      header: 'Verify the OTP',
      subHeader: 'A One Time Password has been sent to the phone number you provided.',
      message: 'Enter it here please.',
      inputs: [
        {
          name: 'otp',
          placeholder: '######',
          
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Canceled OTP Prompt', data);
          }
        },
        {
          text: 'Done!',
          handler: (data: any) => {
            //console.log(data); data variable is the entered value in the field
            data.toString();
            this.submitVerif(data.toString());
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  onNewPost(){
      this.dataplayService.newPostData(
        this.form.value.name,
        this.form.value.custype,
        this.form.value.travelfrom,
        this.form.value.travelcity,
        this.form.value.travelto,
        this.form.value.traveltocity,
        this.form.value.booked,
        this.form.value.email,
        this.form.value.intcode,
        this.form.value.phone,
        this.form.value.traveldate
    );
    this.form.reset();
    this.router.navigate(['../choosescreen/feed-commuter/']);
  }
}


