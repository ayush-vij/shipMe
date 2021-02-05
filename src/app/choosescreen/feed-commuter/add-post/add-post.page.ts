import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataplayService } from '../../dataplay.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  form: FormGroup;
  constructor(private router: Router, private dataplayService: DataplayService) { }

  ngOnInit() {
    this.form = new FormGroup({
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
    console.log(this.form);
    this.dataplayService.newPostData(
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
    this.router.navigate(['/']);
  }
}
