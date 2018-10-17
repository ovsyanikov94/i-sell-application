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

 /* @ViewChild('mainContener')elementView: ElementRef;*/
/*  public winHight: number ;*/
  constructor() { }

  ngOnInit() {
    /*this.winHight = this.elementView.nativeElement.scrollHeight;
    console.log(this.winHight);
    console.log(this.elementView.nativeElement.scrollHeight);*/
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {


  }


}
