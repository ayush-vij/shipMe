import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../dauth.model';
import { DataplayService } from '../../dataplay.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  form: FormGroup;
  user: User[];
  constructor(private router: Router, private dataplayService: DataplayService, private http: HttpClient,) { }

  ngOnInit() {
    this.dataplayService.fetchUser();
    this.form = new FormGroup({
      'name': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'custype': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'travelfrom': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'travelcity': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(2)]
      }),
      'travelto': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'traveltocity': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(2)]
      }),
      'booked': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'email': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(2)]
      }),
      'traveldate': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  onNewPost(){
    this.dataplayService.fetchUser();
    console.log(this.form);
    console.log("Naam: " +this.dataplayService.fetchUser);
    this.dataplayService.newPostData(
      this.dataplayService.fetchUser.name,
      this.form.value.custype,
      this.form.value.travelfrom,
      this.form.value.travelcity,
      this.form.value.travelto,
      this.form.value.traveltocity,
      this.form.value.booked,
      this.form.value.email,
      this.form.value.traveldate
    );
    this.form.reset();
    this.router.navigate(['../choosescreen/feed-commuter/']);
  }
}
