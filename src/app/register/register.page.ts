import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { User } from '../auth.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  constructor(private AuthService: AuthService, private router: Router) { }
    
  ngOnInit() {
    this.form = new FormGroup({
      'fname': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'lname': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      'email': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      'pwd': new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(8)]
      }),
    });
  }
  onNewUser() {
    console.log(this.form);
    this.AuthService.newUser(
      this.form.value.fname,
      this.form.value.lname,
      this.form.value.email,
      this.form.value.pwd,
    );
    this.form.reset();
    this.router.navigate(['/home']);
  }
}
