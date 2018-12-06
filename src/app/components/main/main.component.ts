import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {NavigationEnd, Router} from '@angular/router';
import {ProfileService} from "../../services/profile/profile.service";
import {Constants} from "../../../app/models/Constants";
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
    private router: Router
  ) {

    this.router.events.subscribe( event => {
      // event: [ ChildActivationEnd  , NavigationEnd ... ]
      // console.log(event);

      if ( event instanceof NavigationEnd ){
        this.close();
      }//if

    } );

  }

  ngOnInit() {

    // console.log(window);
    // console.log(window.navigator);

  }//ngOnInit

}
