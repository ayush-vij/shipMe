import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostData } from "../../dataplay.model";
import { DataplayService } from '../../dataplay.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  post: PostData
  id: String;
  constructor(private router: Router, private route: ActivatedRoute, private DataplayService: DataplayService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.post = this.DataplayService.getPostData(this.id);
    console.log(this.post);
  }

  paynow(){
    this.router.navigate(['../../payprocess']);
  }

}
