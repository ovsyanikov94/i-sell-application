import { Component, OnInit, Input } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
@Component({
  selector: 'app-single-lot',
  templateUrl: './single-lot.component.html',
  styleUrls: ['./single-lot.component.css']
})
export class SingleLotComponent implements OnInit {

  @Input() lot: Lot;
  constructor() { }

  ngOnInit() {
  }

}
