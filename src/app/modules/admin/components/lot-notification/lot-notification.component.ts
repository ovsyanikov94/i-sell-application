import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-lot-notification',
  templateUrl: './lot-notification.component.html',
  styleUrls: ['./lot-notification.component.css']
})
export class LotNotificationComponent implements OnInit {


  constructor(public snackBar: MatSnackBar) { }//constructor

  ngOnInit() {

    setInterval(this.openSnackBar.bind(this) , 2000);
    // console.log('snack');

    //this.openSnackBar();

  }//ngOnInit

  openSnackBar(){
    this.snackBar.open("Это всплывашка", "Получилось!", {
      duration: 2500,
      horizontalPosition: 'right'
    });
  }//openSnackBar


}//LotNotificationComponent



