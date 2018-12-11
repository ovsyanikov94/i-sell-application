import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {NavigationEnd, Router} from '@angular/router';
import {ProfileService} from "../../services/profile/profile.service";
import {Constants} from "../../../app/models/Constants";
import {SocketService} from '../../services/socket/socket.service';
import {SocketMessages} from '../../models/Socket/SocketMessages';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }


  constructor(
    private router: Router,
    private socketService: SocketService
  ) {

    this.router.events.subscribe( event => {
      // event: [ ChildActivationEnd  , NavigationEnd ... ]
      // console.log(event);

      if ( event instanceof NavigationEnd ){
        this.close();
      }//if

    } );

    this.socketService
      .getMessage( SocketMessages.NewComment )
      .subscribe( (data) => {
        console.log('NEW COMMENT! Data: ' , data);
      } );

    this.socketService
      .getMessage( 'message:hello' )
      .subscribe( (data) => {
        console.log('message:hello-data: ' , data);
      } );

  }

  ngOnInit() {

    // console.log(window);
    // console.log(window.navigator);

  }//ngOnInit

}
