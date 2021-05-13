import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-payprocess',
  templateUrl: './payprocess.page.html',
  styleUrls: ['./payprocess.page.scss'],
})
export class PayprocessPage implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit() {
    setTimeout(() => this.router.navigate(['../paysuccess']), 5000);
    
  }

}
