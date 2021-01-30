import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-feed-commuter',
  templateUrl: './feed-commuter.page.html',
  styleUrls: ['./feed-commuter.page.scss'],
})
export class FeedCommuterPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  add(){
    this.router.navigate(['../choosescreen/feed-commuter/add-post']);
  }

}
