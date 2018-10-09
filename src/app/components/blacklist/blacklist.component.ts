import { Component, OnInit } from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {



  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'search-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg-img/baseline-youtube_searched_for-24px.svg'));

  }

  ngOnInit() {
  }

}
