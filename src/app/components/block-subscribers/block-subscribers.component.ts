import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user/User';
import {Constants} from "../../../app/models/Constants";
import {ProfileService} from "../../services/profile/profile.service";
import {MatTabChangeEvent} from "@angular/material";
@Component({
  selector: 'app-block-subscribers',
  templateUrl: './block-subscribers.component.html',
  styleUrls: ['./block-subscribers.component.css']
})
export class BlockSubscribersComponent implements OnInit {
  public subscribers: User[] = [];
  public Subscriptions: User[] = [];

  public isEmptySubscribe = true;
  public isEmtrySubscriptions = true;
  public OffsetSubscribe = 0;
  public OffsetSubscriptions = 0;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
  }
  onTabChanged(event: MatTabChangeEvent){

    if ( event.index === 0){
      this.getSubscribe();

    }
    if ( event.index === 1){
      this.getSubscriptions();

      console.log(this.Subscriptions);
    }
  }//onTabChanged

  addOffsetSubscribe(){
    this.OffsetSubscribe += Constants.APP_LIMIT;
    this.getSubscribe( );
  }//addOffsetSubscribe

  addOffsetSubscriptions(){
    this.OffsetSubscriptions += Constants.APP_LIMIT;
    this.getSubscriptions();
  }//addOffsetSubscriptions

  async getSubscribe() {

    const response = await this.profileService.getSubscriber('-1', Constants.APP_LIMIT , this.OffsetSubscribe );
    if ( response.status === 200){
      console.log(response.data);
      if (response.data !== null){
        const res = response.data as User[];
        for (let i = 0; i < res.length; i++ ){

          this.subscribers.push(res[i]);

        }//for
        console.log(' COUNT USER: ', this.subscribers.length);

        if (this.subscribers.length === 0){
          this.isEmptySubscribe = true;
        }//if
        else{
          this.isEmptySubscribe = false;
        }//else
        console.log('USER : ', this.subscribers);
      }//if
      else {
        this.isEmptySubscribe = true;
      }//else
    }
  }//getSubscribe

  async getSubscriptions() {

    const response = await this.profileService.getSubscriptions('-1', Constants.APP_LIMIT , this.OffsetSubscriptions);
    if ( response.status === 200){
      if (response.data !== null){
        const res = response.data as User[];
        for (let i = 0; i < res.length; i++ ){
          this.Subscriptions.push(res[i]);
        }//for
        if (this.Subscriptions.length === 0){
          this.isEmtrySubscriptions = true;
        }//if
        else{
          this.isEmtrySubscriptions = false;
        }//else
      }//if
      else{
        this.isEmtrySubscriptions = true;
      }
    }
  }//getSubscriptions
}
