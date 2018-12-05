import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RejectData} from "../../models/modal.data/reject-data";
import {Constants} from "../../models/Constants";
import { Router} from "@angular/router";
import {LotService} from "../../services/lot/lot.service";

@Component({
  selector: 'app-reject-modal',
  templateUrl: './reject-modal.component.html',
  styleUrls: ['./reject-modal.component.css']
})
export class RejectModalComponent implements OnInit {

  public constants: Constants = Constants;

  constructor(
    private matDialogRef: MatDialogRef<RejectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RejectData,
    private route: Router,
    public lotService: LotService
  ) { }

  ngOnInit() {
  }

  public close(){
    this.matDialogRef.close();
  }//close

  async rejectLot(status:number){


    const response  = await this.lotService.updateLotStatusById(this.data.lot._id, status);

    if(response.status === 200){
      this.route.navigateByUrl('/admin/main/lots-list');
      this.matDialogRef.close();
    }

  }
}
