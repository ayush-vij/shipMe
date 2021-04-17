import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { DataplayService } from '../dataplay.service';
import { PostData } from '../dataplay.model';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../auth.service';
import { User } from '../../auth.model';
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
    private authService: AuthService,
    private http: HttpClient,
    private toastController: ToastController) { }

    doRefresh(event) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        console.log('Async operation has ended');
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
    this.http.get('https://ship-6ba1e-default-rtdb.firebaseio.com/newUser.json')
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
          console.log("User: " +response[key].fname);
          console.log("Password: " +response[key].lname);
        }
        
      }
    );
    return(newVar);
  }

}

