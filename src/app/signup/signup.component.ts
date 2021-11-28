import { LoginValidators } from './../login.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private route: Router) {}
  signupForm = new FormGroup({
    signupEmail: new FormControl(
      '',
      [Validators.required, LoginValidators.noSpaces],
      LoginValidators.beUnique
    ),
    signupPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });

  get signupEmaill() {
    return this.signupForm.get('signupEmail');
  }
  get signupPasswordd() {
    return this.signupForm.get('signupPassword');
  }
  register() {
    this.route.navigate(['./login']);
  }
}
