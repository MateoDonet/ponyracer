import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { UserModel } from '../models/user.model';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // ---------------------------------
  // Formulaire piloté par le template
  // ---------------------------------
  // user: UserModel = {
  //   username: '',
  //   password: ''
  // }

  // register(): void {
  //   console.log(this.user);
  // }
  // ---------------------------------
  // ---------------------------------
  // ---------------------------------

  // ---------------------------------
  // Formulaire piloté par le controller
  // ---------------------------------
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  birthYearCtrl: FormControl;
  userForm: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.minLength(8)]);
    this.birthYearCtrl = fb.control('', [Validators.required, Validators.min(1900), Validators.max(2020)]);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
      birthYear: this.birthYearCtrl
    });
  }

  reset(): void {
    this.usernameCtrl.setValue('');
    this.passwordCtrl.setValue('');
    this.birthYearCtrl.setValue('');
  }

  register(): void {
    console.log(this.userForm.value);
  }

}
