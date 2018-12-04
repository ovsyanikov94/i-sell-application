import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {User} from "../../models/user/User";
import {Bidding} from "../../models/Bidding/Bidding";

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {

  public currentUser: User = new User();

  public currentRate: string;

  public rates: Bidding[] = [

    new Bidding(),
    new Bidding(),
    new Bidding(),
    new Bidding(),
  ]
  public rateFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{1,5}$/ )
  ]);


  constructor() { }

  addRate(){

    console.log('currentRate', this.currentRate);
  }//addRate

  ngOnInit() {
  }

}
