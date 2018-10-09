import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user/User';
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

  foo( user ){

    this.currentUser = user;
    //alert(user.userLogin);
    // this.message.emit( this.currentUser );

  }

  ngOnInit() {

  }

}
