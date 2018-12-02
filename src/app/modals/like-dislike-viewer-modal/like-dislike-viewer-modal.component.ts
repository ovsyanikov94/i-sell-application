import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {User} from "../../models/user/User";
import {Lot} from "../../models/lot/Lot";
import {Constants} from "../../models/Constants";
import {LotService} from "../../services/lot/lot.service";


@Component({
  selector: 'app-like-dislike-viewer-modal',
  templateUrl: './like-dislike-viewer-modal.component.html',
  styleUrls: ['./like-dislike-viewer-modal.component.css']
})
export class LikeDislikeViewerModalComponent implements OnInit {

  public limit: number = Constants.APP_LIMIT_LOT;
  public offset: number = Constants.APP_OFFSET_LOT;



  public currentMark: number;
  public currentLot: Lot;
  public usersWithMark = [];


  constructor(private matDialogRef: MatDialogRef<LikeDislikeViewerModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private lotService: LotService) {

    console.log('modal data: ', data);
    this.usersWithMark = data.users;
    this.currentMark = data.mark;
    this.currentLot = data.lot;


  }//constructor

  ngOnInit() {



  }//ngOnInit

  public close(){
    this.matDialogRef.close();
  }//close

  async MoreMarkedUsers(currentLot, currentMark){

    this.offset += this.limit;

    const responseUsers = await this.lotService.getUsersListWithLikeDislike( currentLot, currentMark, this.limit, this.offset );

    if ( responseUsers.status === 200){

      const moreUsers =  responseUsers.data;

      moreUsers.forEach(l => {

        this.usersWithMark.push (l);

      });

      if ( moreUsers.length === 0 ){
        this.offset += this.usersWithMark.length;
      }//if

    }//if

  }//MoreMarkedUsers

}//LikeDislikeViewerModalComponent
