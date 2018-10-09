import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../../models/user/User';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  @Input( 'user' ) user: User;

  @Output( 'onUserClick' ) userClick: EventEmitter<User> = new EventEmitter<User>();


  constructor() { }//constructor

  ngOnInit() { }

  onUserMouseClick(){
    this.userClick.emit( this.user );
  }

}
