import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user/User';

@Component({
  selector: 'app-block-subscribers',
  templateUrl: './block-subscribers.component.html',
  styleUrls: ['./block-subscribers.component.css']
})
export class BlockSubscribersComponent implements OnInit {
  public users: User[] = [
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),

  ];

  constructor() { }

  ngOnInit() {
  }

}
