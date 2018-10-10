import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';


@Component({
  selector: 'app-confirmation-lot',
  templateUrl: './confirmation-lot.component.html',
  styleUrls: ['./confirmation-lot.component.css']
})
export class ConfirmationLotComponent implements OnInit {

  public lots: Lot[];
  constructor() {

    this.lots = [
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
    ];
  }

  ngOnInit() {
  }

}
