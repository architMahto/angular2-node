import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  styleUrls: ['./signin.component.css'],
  templateUrl: './signin.component.html'
})

export class SigninComponent {
  signinForm: FormGroup;

  onSubmit() {
    console.log(this.signinForm);
    this.signinForm.reset();
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }
}