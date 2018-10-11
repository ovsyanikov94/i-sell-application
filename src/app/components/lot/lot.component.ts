import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css'],

})
export class LotComponent implements OnInit {

  public lot: Lot = new Lot();

  constructor() {

  }

  ngOnInit() {

    console.log(this.lot);

  }

}
