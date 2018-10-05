import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User = new User();

  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z]{4,20}$/i),
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required
  ]);


  constructor() { }

  ngOnInit() {
  }

}
