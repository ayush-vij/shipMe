import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { DataplayService } from '../dataplay.service';
import { PostData } from '../dataplay.model';
import { DatePipe } from '@angular/common';
import { DAuthService } from '../../dauth.service';
import { User } from '../../dauth.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feed-commuter',
  templateUrl: './feed-commuter.page.html',
  styleUrls: ['./feed-commuter.page.scss'],
})
export class FeedCommuterPage {
  postdata: PostData[];
  user: User[];
  saved: PostData[];
  // postdata: any;
  constructor(
    private alertController: AlertController, 
    private router: Router, 
    private dataplayService: DataplayService,
    private actionSheetController: ActionSheetController,
    private datePipe: DatePipe,
    private authService: DAuthService,
    private http: HttpClient,
    private toastController: ToastController) { }

    doRefresh(event) {
      console.log('Refreshing..');
  
      setTimeout(() => {
        console.log('Refreshed! Data has been updated!');
        event.target.complete();
      }, 1000);
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'The post has been saved.',
        duration: 2000
      });
      toast.present();
    }

    async onSave(pst: PostData) {
      const alert = await this.alertController.create({
        header: 'Save?',
        subHeader: 'Are you sure?',
        message: 'Are you sure you want to save this post?',
        buttons: [
          {
            text: 'Confirm',
            handler: () => {
              this.dataplayService.saveThis(pst);
              console.log("Item:" +this.dataplayService.saveThis(pst));
              this.presentToast();
              // console.log("Kya hai yeh? " +this.dataService.addItemToCart(item));
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            console.log('Cancelled');
            },
          }
        ]
      });
      
      await alert.present();
    }

  ionViewWillEnter() {
    
    this.postdata=this.dataplayService.fetchPostData();
    // console.log(this.postdata);
  }

  add(){
    this.router.navigate(['../choosescreen/feed-commuter/add-post']);
  }

  loadUser(){
    var newVar: User[]=[];
    var newData: PostData[]=[];
    this.http.get('https://postship-2c320-default-rtdb.firebaseio.com/newPostData.json')
    .subscribe(
      response => {
        for (const key in response){
          newData.push(
            new PostData(
              key,
              response[key].fname,
              response[key].booked,
              response[key].custype,
              response[key].email,
              response[key].travelcity,
              response[key].traveldate,
              response[key].travelfrom,
              response[key].travelto,
              response[key].traveltocity,
            )
          );
        }
        
      }
    );
    this.http.get('https://postship-2c320-default-rtdb.firebaseio.com/newUser.json')
    .subscribe(
      response => {
        for (const key in response){
          newVar.push(
            new User(
              key,
              response[key].fname,
              response[key].email,
              response[key].pwd,
            )
          );
          console.log("Name: " +response[key].fname);
          console.log("Email: " +response[key].email);
          console.log("Password: " +response[key].pwd);
        }
        
      }
    );
    return(newVar);
    return(newData);
  }

}

