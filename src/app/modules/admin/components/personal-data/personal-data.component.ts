import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {Lot} from '../../models/lot/Lot';
@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];



  public user: User = new User();
  public lots: Lot[] = [
    new Lot(),
    new Lot(),
    new Lot()

  ];
  constructor() {}

  ngOnInit() {
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
