import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {MatDialog} from "@angular/material";
import { BetModalComponent } from '../../modals/bet.modal/bet.modal.component';
import { BetData } from '../../models/modal.bet/bet.data';
import {FormControl, Validators} from "@angular/forms";



@Component({
  selector: 'app-card-lot',
  templateUrl: './cardLot.component.html',
  styleUrls: ['./cardLot.component.css'],

})


export class CardLotComponent implements OnInit {

  public lots: Lot[];




  constructor( public dialog: MatDialog ) {

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

  bet( event ){

    const betData: BetData = new class implements BetData {
      lot: Lot;
    };

    betData.lot = new Lot();

    if ( event instanceof KeyboardEvent && event.code === "Enter" ){
      this.openDialog(betData);
    }//if
    else if ( event instanceof  MouseEvent){
      this.openDialog(betData);
    }//else if


  }//authorize

  openDialog( betData: BetData ): void {

    const dialogRef = this.dialog.open(BetModalComponent, {
      width: '440px',
      data: betData
    });

  }//openDialog



}
