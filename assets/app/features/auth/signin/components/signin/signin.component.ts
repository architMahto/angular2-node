import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../../models';
import { AuthService } from '../../../../../services';

@Component({
  selector: 'app-signin',
  styleUrls: ['./signin.component.css'],
  templateUrl: './signin.component.html'
})

export class SigninComponent {
  signinForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const user: User = {
      email: this.signinForm.controls['email'].value,
      password: this.signinForm.controls['password'].value,
    };
    this.authService.signIn(user)
      .subscribe(
        data => { 
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.router.navigateByUrl('/');
        },
        error => { console.log(error); }
      ) 
    this.signinForm.reset();
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }
}