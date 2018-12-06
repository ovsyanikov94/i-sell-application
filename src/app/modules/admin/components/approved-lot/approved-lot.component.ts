import { Component, OnInit } from '@angular/core';

import {Admin} from '../../models/admin/Admin';
import {Lot} from '../../models/lot/Lot';

@Component({
  selector: 'app-approved-lot',
  templateUrl: './approved-lot.component.html',
  styleUrls: ['./approved-lot.component.css']
})
export class ApprovedLotComponent implements OnInit {

  public admin: Admin = new Admin();
  public approved:Lot[] = this.admin.approvedLot;

  public length:number = this.approved.length;

  pageSize = 4;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  public offset: number = 0;
  public limit: number = 4;

  constructor() { }

  ngOnInit() {

  }

  NextPrevPage(event){

    this.offset = event.pageIndex * event.pageSize;
    this.limit = this.offset + event.pageSize;

  }//NextPrevPage

  applyFilter(filterValue: string) {

    this.approved  = this.admin.approvedLot.filter((l)=>{

      return l.lotTitle.toLowerCase().indexOf(filterValue.toLowerCase())>-1;
    });

    this.length = this.approved.length;


  }//applyFilter
}
