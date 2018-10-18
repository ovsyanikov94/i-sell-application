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

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  onItemClick( event , user ): void {

    console.log(event);

    if ( event.target.closest('.button-row') === null ){

      this.router.navigateByUrl( `/main/my-dialog/${user.userLogin}` );

    }//if
    else{
      console.log('Remove!');
    }//else

  }//onItemClick

}//ListDialogsComponent
