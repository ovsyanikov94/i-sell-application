import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../../models/user/User';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  @Input( 'user' ) user: User;
  constructor() { }

  ngOnInit() {
  }

}
