import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-paysuccess',
  templateUrl: './paysuccess.page.html',
  styleUrls: ['./paysuccess.page.scss'],
})
export class PaysuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
recd(){
  this.router.navigate(['./payprocess']);
}
feed(){
  this.router.navigate(['./payforward']);
}
}
