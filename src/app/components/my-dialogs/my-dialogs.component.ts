import { Component, OnInit, HostListener, ViewChild , ElementRef  } from '@angular/core';

import {User} from '../../models/user/User';
@Component({
  selector: 'app-my-dialogs',
  templateUrl: './my-dialogs.component.html',
  styleUrls: ['./my-dialogs.component.css']
})
export class MyDialogsComponent implements OnInit {


  correntUser: User = new User();
  dialogUser: User = new User();

  public winHeight: number ;

  constructor() { }

  ngOnInit() {

    this.winHeight = window.innerHeight - 270;
    console.log(this.winHeight);

  }//ngOnInit


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    this.winHeight = window.innerHeight - 270;
    console.log(this.winHeight);

  }//onResize

}//MyDialogsComponent
