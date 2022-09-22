import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { registerUser } from 'src/app/store/user-store/user-action'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private store: Store) {}

  profileForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  validEmail:Boolean = this.profileForm.controls.email.valid
  validPassword:Boolean = this.profileForm.controls.password.valid

  getEmailErrorMessage() {
    if (this.profileForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.profileForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.profileForm.controls.password.hasError('required') ? '' : 'Minimum 8 characters';
  }

  ngOnInit(): void {
  }

  signIn(){
    if (this.profileForm.valid ) {
      const userObject = {
        email: this.profileForm.controls.email.value || '',
        password: this.profileForm.controls.password.value || '',
        isLogged: true
      }
      this.store.dispatch(registerUser(userObject))
      this.router.navigate(['admin']);
    }
  }

}
