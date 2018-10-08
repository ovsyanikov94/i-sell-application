import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
@Component({
  selector: 'app-block-black-list',
  templateUrl: './block-black-list.component.html',
  styleUrls: ['./block-black-list.component.css']
})
export class BlockBlackListComponent implements OnInit {

  public users = [
    {user: new User()},
    {user: new User()},
    {user: new User()},
    {user: new User()},
    {user: new User()},
    {user: new User()},
    {user: new User()},
    {user: new User()},

  ]
  constructor() { }

  ngOnInit() {
  }

}
