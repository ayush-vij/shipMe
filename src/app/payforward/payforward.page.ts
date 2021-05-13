import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-payforward',
  templateUrl: './payforward.page.html',
  styleUrls: ['./payforward.page.scss'],
})
export class PayforwardPage implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit() {
    setTimeout(() => this.router.navigate(['../choosescreen/feed-commuter/']), 5000);
    
  }

}
