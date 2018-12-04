import { Component, OnInit } from '@angular/core';
import {RejectModalComponent} from '../../modals/reject-modal/reject-modal.component';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {MatDialog} from '@angular/material';
import {ActivatedRoute,  Router} from "@angular/router";
import {LotService} from "../../services/lot/lot.service";
import * as moment from 'moment';
import {ServerResponse} from "../../models/server/ServerResponse";
import {LotType} from "../../models/lot-type/LotType";
import {Constants} from "../../models/Constants";

@Component({
  selector: 'app-single-lot-approve',
  templateUrl: './single-lot-approve.component.html',
  styleUrls: ['./single-lot-approve.component.css']
})
export class SingleLotApproveComponent implements OnInit {

  public moment  = moment;
  
  public lot: Lot;
  public images: string[] = [];


  public constants: Constants = Constants;

  constructor(
    public dialog: MatDialog,
    private router: ActivatedRoute,
    private route: Router,
    public lotService: LotService
  ){

    this.router.data.subscribe( (resolvedData: any ) => {

      console.log('resolved data:' , resolvedData);
      this.lot = resolvedData.singlelotResponse.data as Lot;

      this.images = this.lot.lotImagePath.map(function(image) {
        return image.path;
      });

    } );

    this.onLotResponse();
  }

  public openModal(){

    this.dialog.open(RejectModalComponent, {data: {rejectMessage: 'Причина отклонения выставляемого лота'}});

  }//openModal

  async approvedLot(){

    const response  = await this.lotService.approvedLotById(this.lot._id);

    if(response.status === 200){
      this.route.navigateByUrl('/main/lots-list');
    }
  }
  ngOnInit() {

  }

  async onLotResponse(){

    try{

        const typeLotResponse = await this.lotService.getTypeLotById(+this.lot.typeLot);

        if(typeLotResponse.status===200){
          this.lot.typeLot = typeLotResponse.data as LotType;
        }//if

        console.log(this.lot);
        console.log(this.images);



    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch


  }//onLotsResponse
}
