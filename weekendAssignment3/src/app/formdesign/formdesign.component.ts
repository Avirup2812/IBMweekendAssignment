import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css'],
})
export class FormdesignComponent implements OnInit {
  logIn!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.logIn = new FormGroup({
      fName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(20),
      ]),
    });
  
  }
  onSubmit() {
    console.log(this.logIn.value);
  }
  get f(): any {
    return this.logIn.get('fName');
  }
  get l(): any {
    return this.logIn.get('lName');
  }
  get mail(): any {
    return this.logIn.get('email');
  }
  get pass(): any {
    return this.logIn.get('password');
  }
  clickedMe() {
    alert(
      'Congratulations! You have successfully registered for 7 days free trial.'
    );
  }
}
