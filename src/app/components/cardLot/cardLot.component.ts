import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';


@Component({
  selector: 'app-card-lot',
  templateUrl: './cardLot.component.html',
  styleUrls: ['./cardLot.component.css'],

})


export class CardLotComponent implements OnInit {

  public lots: Lot[];

  constructor() {

    this.lots = [
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
      // new Lot(),
    ];

  }

  ngOnInit() {
  }

}
