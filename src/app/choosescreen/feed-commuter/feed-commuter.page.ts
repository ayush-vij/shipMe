import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feed-commuter',
  templateUrl: './feed-commuter.page.html',
  styleUrls: ['./feed-commuter.page.scss'],
})
export class FeedCommuterPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

}
