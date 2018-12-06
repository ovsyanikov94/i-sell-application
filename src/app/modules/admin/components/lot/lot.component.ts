import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {Category} from '../../models/category/Category';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css'],

})
export class LotComponent implements OnInit {


  public lot: Lot = new Lot();
  public currentUser: User = new User();

  constructor() {
      this.lot.categories = [new Category('',"Категория 1")];
  }

  ngOnInit() {


    console.log(this.lot);

  }






}
