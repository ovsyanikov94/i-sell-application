import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isYourProfile : boolean;

  constructor(private Router : Router) {

    let url = this.Router.url;

    if(url && url === '/my-profile'){

      this.isYourProfile = true;

    }//if
    else {

      this.isYourProfile = false;

    }//else

  }//constructor

  ngOnInit() {

  }//ngOnInit

}//UserProfileComponent
