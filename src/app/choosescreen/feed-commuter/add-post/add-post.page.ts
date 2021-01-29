import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  form: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
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

}
