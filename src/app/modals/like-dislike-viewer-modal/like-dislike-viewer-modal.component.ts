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

  public usersWithMark: User[] = [];

  constructor(private matDialogRef: MatDialogRef<LikeDislikeViewerModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private lotService: LotService) {

  }//constructor

  ngOnInit() {

  }//ngOnInit

  public close(){
    this.matDialogRef.close();
  }//close

  async MoreMarkedUsers(lot, mark){

    this.offset += this.limit;

    const responseUsers = await this.lotService.getUsersListWithLikeDislike( lot, mark, this.offset, this.limit );

    if ( responseUsers.status === 200){

      const moreLots =  responseUsers.data;

      moreLots.forEach(l => {

        this.usersWithMark.push (l);

      });

      if ( moreLots.length === 0 ){
        this.offset += this.usersWithMark.length;
      }//

      console.log('this.offset', this.offset);
      console.log('users', this.usersWithMark);

    }//if

  }//MoreMarkedUsers

}//LikeDislikeViewerModalComponent
