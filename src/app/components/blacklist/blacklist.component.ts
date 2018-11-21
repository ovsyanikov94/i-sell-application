import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../../models/user/User';
import {RemoveFromBlacklistComponent} from '../../modals/remove-from-blacklist/remove-from-blacklist.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  @Input( 'user' ) user: User;

  @Output( 'onUserClick' ) userClick: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private removeFromBlacklistModal: MatDialog
  ) {

  }

  ngOnInit() { }


  onUserRemove( user: User ){

    this.openDialog( user );

  }//onUserRemove

  openDialog( user: User ){

    this.removeFromBlacklistModal.open(RemoveFromBlacklistComponent , {
      width: '450px',
      data: user
    });

  }//openDialog

  onUserMouseClick(){
    this.userClick.emit( this.user );
  }

}
