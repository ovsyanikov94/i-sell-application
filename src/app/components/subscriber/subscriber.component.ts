import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../../models/user/User';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {

  @Input( 'user' ) user: User;

  constructor() {

  }


  ngOnInit() {

  }
}


