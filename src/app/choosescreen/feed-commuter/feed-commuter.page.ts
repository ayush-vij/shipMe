import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { DataplayService } from '../dataplay.service';
import { PostData } from '../dataplay.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-feed-commuter',
  templateUrl: './feed-commuter.page.html',
  styleUrls: ['./feed-commuter.page.scss'],
})
export class FeedCommuterPage {
  postdata: PostData[];
  // postdata: any;
  constructor(
    private alertController: AlertController, 
    private router: Router, 
    private dataplayService: DataplayService,
    private actionSheetController: ActionSheetController,
    private datePipe: DatePipe) { }

    doRefresh(event) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 1000);
    }

  ionViewWillEnter() {
    
    this.postdata=this.dataplayService.fetchPostData();
    // console.log(this.postdata);
  }

  add(){
    this.router.navigate(['../choosescreen/feed-commuter/add-post']);
  }

}

