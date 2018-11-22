import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {FormControl, Validators} from '@angular/forms';
import {PasswordConfirmValidator} from '../../Validators/PaswordValidator';
import {MatDialog} from '@angular/material';
import {AuthModalComponent} from '../../modals/auth.modal/auth.modal.component';
import {Check} from '../../models/check/Check';
import {Lot} from '../../models/lot/Lot';
import {AuthService} from "../../services/user/auth.service";
import {LotService} from '../../services/lot/lot.service';
import { AuthData} from '../../models/modal.data/auth.data';
import {ServerResponse} from "../../models/server/ServerResponse";
import {LotStatus} from "../../models/lot-status/Lot-status";
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public offsetBuy = 0;
  public offsetSale = 0;
  public selectedBuy: string;
  public selectedSale: string;
  public user: User = new User();

  public  balanse: number;

  public  addSumm: number;
  public checks: Check[];

  public lotstatusListBuy: LotStatus[] ;
  public lotstatusListSale: LotStatus[] ;

  public lotsBuy: Lot[] = null;
  public lotsSale: Lot[] = null;

  public nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z а-я]{2,25}$/i),
  ]);
  public lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z а-я]{2,25}$/i),
  ]);
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/.+@.+\..+/i)
  ]);
  public phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/i )
  ]);
  public addSummFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+/ )
  ]);

  public oldPasswordFormControl = new FormControl('', [
    Validators.required,
  ]);
  public newPasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  public newPasswordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.user )
  ]);

  public avatarControl = new FormControl();

  constructor(
    public dialog: MatDialog,
    private authSersice: AuthService,
    private lotService: LotService
  ) {
    this.offsetBuy = 0;
    this.offsetSale = 0;
    
    const responseBuy = this.lotService.getStatusLotBuy()
      .then(this.getListLotStatusBuy.bind(this));
    
    const responseSale = this.lotService.getStatusLotSale()
      .then(this.getListLotStatusSale.bind(this));

  }


   ngOnInit() {

      if (this.lotstatusListBuy.length !== 0){
       this.selectedBuy = this.lotstatusListBuy[0].toString();
      }//if
      if ( this.lotstatusListSale.length !== 0){
       this.selectedSale = this.lotstatusListSale[0].toString();
      }//if

    this.balanse = 1000;
    this.checks = [
      new Check('15.02.2018', 1, 250),
      new Check('15.02.2018', 2, 250),
      new Check('15.02.2018', 3, 250),
      new Check('15.02.2018', 4, 250)
    ];


  }

  checkAllFields(): boolean{

    return this.nameFormControl.valid &&
      this.lastNameFormControl.valid &&
      this.emailFormControl.valid &&
      this.phoneFormControl.valid &&
      this.oldPasswordFormControl.valid &&
      this.newPasswordFormControl.valid &&
      this.newPasswordConfirmFormControl.valid;

  }//checkAllFields

   addOffsetBuy(){
    this.offsetBuy += 12;
     this.getLotBuy(this.selectedBuy);
  }
  
   addOffsetSale(){
    this.offsetSale += 12;
     this.getLotSale(this.selectedSale);
  }

  async getListLotBuy(response: ServerResponse){

    console.log(response);
    try {
      if ( response.status === 200){
        console.log(response);
      }
    }
    catch (ex){
      console.log( "Exception: " , ex );
    }
  }
  
  async getListLotStatusSale(response: ServerResponse){
    console.log(response);
    try {
      if ( response.status === 200){
        this.lotstatusListSale = response.data as LotStatus[];
      }
    }
    catch (ex){
      console.log( "Exception: " , ex );
    }
  }

  async getListLotStatusBuy(response: ServerResponse){

    console.log(response);

    try {
      if ( response.status === 200){

        this.lotstatusListBuy = response.data as LotStatus[];

        this.selectedSale = this.lotstatusListBuy[0].statusID;

        const responseLots = this.lotService.GetUserBuyLot(
          this.lotstatusListBuy[0].statusID,
          this.offsetBuy,
          10 )
          .then(this.getListLotBuy.bind(this));

      }
    }
    catch (ex){
      console.log( "Exception: " , ex );
    }
  }

  async updatePassword(){
    if ( !this.oldPasswordFormControl.valid ||
      !this.newPasswordConfirmFormControl.valid
    ){
      this.openDialog({
        message: 'некорректные значения'
      });
      return;
    }//if

    const authData: AuthData = new class implements AuthData {
      message: string;
    };
    authData.message = "Вы вошли!";

    try {

      const response = await this.authSersice.changePassword( this.user );

        this.openDialog({
          message: response.message
        });

    }
    catch (ex){
      this.openDialog({
        message: ex.error.message
      });
    }
  }
  async updateUserInfo(){

    if ( !this.nameFormControl.valid ||
      !this.lastNameFormControl.valid ||
      !this.emailFormControl.valid ||
      !this.phoneFormControl.valid
    ){
      this.openDialog({
        message: 'некорректные значения'
      });
      return;
    }//if

    const authData: AuthData = new class implements AuthData {
      message: string;
    };
    authData.message = "Вы вошли!";

    try {

      const response = await this.authSersice.changeUserInfo( this.user );
      
      console.log('ОТВЕТ', response);
      
      if ( response.status === 200){
        this.user = response.data as User;
      }
      this.openDialog({
        message: response.message
      });

    }
    catch (ex){
      this.openDialog({
        message: ex.error.message
      });
    }
  }

  async getLotBuy(value){
    
    const selectOld =  this.selectedBuy;
    this.selectedBuy = value;

    const response = await this.lotService.GetUserBuyLot(value, this.offsetBuy , 10 );
    if (response.status === 200 ){


      // тут тело ответа парсим в масив лотов
      if ( selectOld !== value){
        this.offsetBuy = 0;
      }
    }
  }
  async getLotSale(value){
    
    const selectOld =  this.selectedSale;
    this.selectedSale = value;

    const response = await this.lotService.GetUserSaleLot(value, this.offsetSale , 10 );
    if (response.status === 200 ){

      // тут тело ответа парсим в масив лотов

      if ( selectOld !== value){
        this.offsetSale = 0;
      }
    }
  }

  selectedTabs(event){
   console.log(event);
  }//selectedTabs
  openDialog( authData: AuthData ): void {


    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

}
