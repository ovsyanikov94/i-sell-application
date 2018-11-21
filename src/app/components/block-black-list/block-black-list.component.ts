import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user/User';
import {MatDialog} from '@angular/material';

import { RemoveFromBlacklistComponent } from '../../modals/remove-from-blacklist/remove-from-blacklist.component'

@Component({
  selector: 'app-block-black-list',
  templateUrl: './block-black-list.component.html',
  styleUrls: ['./block-black-list.component.css']
})
export class BlockBlackListComponent implements OnInit {

  public currentUser: User;

  @Output('nextMessage') message: EventEmitter<User> = new EventEmitter<User>();

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

}
