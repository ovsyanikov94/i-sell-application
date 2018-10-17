import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {MatDialog} from "@angular/material";
import {ComplaintsModalComponent} from "../../modals/complaints-modal/complaints-modal.component";
import {FeedbackModalComponent} from "../../modals/feedback-modal/feedback-modal.component";


@Component({
  selector: 'app-confirmation-lot',
  templateUrl: './confirmation-lot.component.html',
  styleUrls: ['./confirmation-lot.component.css']
})
export class ConfirmationLotComponent implements OnInit {

  public lots: Lot[];
  public user: User;

  constructor(public dialog: MatDialog) {

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

    this.user = new User();

  }//constructor



  ngOnInit() {

  }//ngOnInit

  public complaintModal(){

    this.dialog.open(ComplaintsModalComponent, { data: { message: 'Жалоба на пользователя', complaintUser: this.user.userLogin}});

  }//complaintModal

  public feedBackModal(){
    this.dialog.open(FeedbackModalComponent, { data: { message: 'Оставьте свой отзыв для пользователя', complaintUser: this.user.userLogin}});
  }//feedBackModal

}
