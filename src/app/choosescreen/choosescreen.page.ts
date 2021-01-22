import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-choosescreen',
  templateUrl: './choosescreen.page.html',
  styleUrls: ['./choosescreen.page.scss'],
})
export class ChoosescreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  commfun(){
    this.router.navigate(['../choosescreen/feed-commuter']);
  }

  ordfun(){
    this.router.navigate(['../choosescreen/feed-orderer']);
  }

}
