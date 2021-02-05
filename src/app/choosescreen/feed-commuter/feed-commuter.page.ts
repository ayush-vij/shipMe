import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { DataplayService } from '../dataplay.service';
import { dataplay } from '../dataplay.model';

@Component({
  selector: 'app-feed-commuter',
  templateUrl: './feed-commuter.page.html',
  styleUrls: ['./feed-commuter.page.scss'],
})
export class FeedCommuterPage {
  loadedposts: dataplay[];
  constructor(private alertController: AlertController, private router: Router, private dataplayService: DataplayService) { }

  ionViewWillEnter() {
    this.loadedposts = this.dataplayService.posts;
    console.log(this.loadedposts);
  }
  

  ngOnInit() {
  }

  add(){
    this.router.navigate(['../choosescreen/feed-commuter/add-post']);
  }

}

