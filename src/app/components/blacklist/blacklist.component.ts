import { Component, OnInit, Input } from '@angular/core';
import { BlackCardUser } from '../../models/blackcardUser/BlackCardUser';
import { User } from '../../models/user/User';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  @Input() user;
  public blackCart: BlackCardUser = new BlackCardUser(<User>this.user)
  constructor() { }

  ngOnInit() {
  }

}
