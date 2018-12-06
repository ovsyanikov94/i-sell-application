import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user/User';
import {Constants} from "../../models/Constants";
import {ServerResponse} from "../../models/server/ServerResponse";
import {GetUserListService} from "../../services/user/get-user-list.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[] = [];


  constructor(private getUserListService: GetUserListService ) { }

  ngOnInit() {

    this.getUserListService.getUserList(
      Constants.APP_OFFSET,
      Constants.APP_LIMIT
    ).then( this.onUserResponse.bind(this) );

  }

  onUserResponse(response: ServerResponse){

    console.log(response);

    try{

      if( response.status === 200 ){

        this.users = response.data as User[];

      }//if

    }//try
    catch (ex){

      console.log( "Exception: " , ex );

    }//catch

  }//onCategoryResponse

  SortByName(){

    if (this.users.length > 0){
      this.users.sort(this.compareName);
    }//if
    else{

    }

  }//SortByName

  SortByLogin(){

    if (this.users.length > 0){
      this.users.sort(this.compareLogin);
    }//if
    else{

    }

  }//SortByName

  SortByLastName(){

    if (this.users.length > 0){
      this.users.sort(this.compareLastName);
    }//if
    else{

    }

  }//SortByLastName



  compareName(user1: User, user2: User) {
      if ( user1.userName > user2.userName){
        return 1;
      }
    if ( user1.userName < user2.userName){
      return -1;
    }
    return 0;
  }//compareName

  compareLogin(user1: User, user2: User) {
    if ( user1.userLogin > user2.userLogin){
      return 1;
    }
    if ( user1.userLogin < user2.userLogin){
      return -1;
    }
    return 0;
  }//compareLogin

  compareLastName(user1: User, user2: User) {
    if ( user1.userLastname > user2.userLastname){
      return 1;
    }
    if ( user1.userLastname < user2.userLastname){
      return -1;
    }
    return 0;
  }//compareLogin




}
