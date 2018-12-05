import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user/User';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
