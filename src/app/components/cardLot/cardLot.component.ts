import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {MatDialog} from "@angular/material";
import { BetModalComponent } from '../../modals/bet.modal/bet.modal.component';
import { BetData } from '../../models/modal.bet/bet.data';
import {FormControl, Validators} from "@angular/forms";
import { Category } from '../../models/category/Category';

//SERVICES
import {LotService} from '../../services/lot/lot.service';
import {CategoryService} from '../../services/category/category.service';
import {Constants} from "../../models/Constants";
import {ServerResponse} from "../../models/server/ServerResponse";
@Component({
  selector: 'app-card-lot',
  templateUrl: './cardLot.component.html',
  styleUrls: ['./cardLot.component.css'],

})


export class CardLotComponent implements OnInit {

  public lots: Lot[];

  categoriesControl = new FormControl();
  categories: Category[] ;

  constructor(
    public dialog: MatDialog ,
    private lotService: LotService,
    private categoryService: CategoryService,
  ) {


    this.categoryService.getCategories(
      Constants.APP_OFFSET,
      Constants.APP_LIMIT
    ).then( this.onCategoryResponse.bind(this) );

  }

  onCategoryResponse(response: ServerResponse){

    try{

      if ( response.status === 200 ){

        this.categories = response.data as Category[];

      }//if

    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch

  }//onCategoryResponse

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
