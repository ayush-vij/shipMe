import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostData } from "../../dataplay.model";
import { DataplayService } from '../../dataplay.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-details-admin',
  templateUrl: './post-details-admin.page.html',
  styleUrls: ['./post-details-admin.page.scss'],
})
export class PostDetailsAdminPage implements OnInit {
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
