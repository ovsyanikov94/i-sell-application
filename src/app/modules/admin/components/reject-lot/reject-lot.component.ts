import { Component, OnInit } from '@angular/core';
import {Admin} from '../../models/admin/Admin';
import {Lot} from '../../models/lot/Lot';

@Component({
  selector: 'app-reject-lot',
  templateUrl: './reject-lot.component.html',
  styleUrls: ['./reject-lot.component.css']
})
export class RejectLotComponent implements OnInit {

  public admin: Admin = new Admin();

  public rejected:Lot[] = this.admin.rejectedLot;

  public length:number = this.rejected.length;

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

    this.rejected  = this.admin.rejectedLot.filter((l)=>{

      return l.lotTitle.toLowerCase().indexOf(filterValue.toLowerCase())>-1;
    });

    this.length = this.rejected.length;


  }//applyFilter

}
