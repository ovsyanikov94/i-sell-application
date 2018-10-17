import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-dialogs',
  templateUrl: './list-dialogs.component.html',
  styleUrls: ['./list-dialogs.component.css']
})
export class ListDialogsComponent implements OnInit {
  public users: User[] = [
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
  ];

  constructor() {

  }

  ngOnInit() {
  }

  removeDialog(){
    console.log('click');
  }
}
