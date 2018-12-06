'use strict';

import {ProfileService} from "../services/profile/profile.service";
import {User} from './user/User';
import {Constants} from "./Constants";
import {ServerResponse} from "./server/ServerResponse";
export class SubscribeFunction{
  public user: User;
  public subscribers: User[];
  public Subscriptions: User[];
  public statusSubscribe: boolean;
  public isEmptySubscribe: boolean;
  public isEmtrySubscriptions: boolean;
  public OffsetSubscribe: number;
  public OffsetSubscriptions: number;
  public profileService: any;
  constructor(user,
  subscribers,
  Subscriptions,
  isEmtrySubscriptions,
  isEmptySubscribe,
  OffsetSubscriptions,
  OffsetSubscribe,
  profileService
  ){
      this.user = user;
      this.subscribers = subscribers;
      this.Subscriptions = Subscriptions;
      this.isEmtrySubscriptions = isEmtrySubscriptions;
      this.isEmptySubscribe = isEmptySubscribe;
      this.OffsetSubscriptions = OffsetSubscriptions;
      this.OffsetSubscribe = OffsetSubscribe;
      this.profileService = profileService;
  }
  async getSubscribe() {

    const response = await this.profileService.getSubscriber(this.user._id, Constants.APP_LIMIT , this.OffsetSubscribe );
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

    const response = await this.profileService.getSubscriptions(this.user._id, Constants.APP_LIMIT , this.OffsetSubscriptions);
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

  async Subscribe(){

    const response = await this.profileService.addSubscriber(this.user);

    if ( response.status === 200){
      this.statusSubscribe = response.data;
    }
  }//Subscribe

  async unSubscribe(){
    const response = await this.profileService.removeSubscriber(this.user);
    if ( response.status === 200){
      console.log('resp' , response);
      this.statusSubscribe = response.data;
    }
  }//unSubscribe

}//SubscribeFunction
