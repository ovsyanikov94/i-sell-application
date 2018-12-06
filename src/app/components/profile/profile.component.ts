import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {Lot} from "../../models/lot/Lot";
import {MatTabChangeEvent} from "@angular/material";
import {AuthService} from "../../services/user/auth.service";
import {ProfileService} from "../../services/profile/profile.service";
import {ServerResponse} from "../../models/server/ServerResponse";
import {ActivatedRoute, Router} from '@angular/router';
import {Constants} from "../../../app/models/Constants";
import {SubscribeFunction} from "../../../app/models/ModelFunctionsSubscribe";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User = new User();

  public subscribers: User[] = [];
  public Subscriptions: User[] = [];
  public lots: Lot[] = [];
  public statusSubscribe: boolean;
  public isEmptySubscribe = true;
  public isEmtrySubscriptions = true;
  public OffsetSubscribe = 0;
  public OffsetSubscriptions = 0;

  private SubscribeFunction = new SubscribeFunction(
    this.user,
    this.subscribers,
    this.Subscriptions,
    this.isEmtrySubscriptions,
    this.isEmptySubscribe,
    this.OffsetSubscriptions,
    this.OffsetSubscribe,
    this.profileService
  );
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
  ) {


    this.route.params.subscribe( async (params) => {

      console.log('params: ' , params);

      const responseBuy = await this.authService.getUser(params.id);
      if (responseBuy.data === null){
        this.router.navigateByUrl('main/my-profile');
        return;
      }//if
      if (responseBuy.status === 200){
        this.user = responseBuy.data as User;
      }//if

      const response = await this.profileService.inListSubstriber(this.user);
      if (response.status === 200){
        console.log('RESPONE IN BD', response);
        this.statusSubscribe = response.data;
      }//if
    } );

  }

  ngOnInit() {
  }


  async onTabChanged(event: MatTabChangeEvent){

    this.Subscriptions.length = 0;
    this.subscribers.length = 0;
    this.OffsetSubscribe = 0;
    this.OffsetSubscriptions = 0;

    if ( event.index === 1){

     await this.getSubscribe();

    }//if

    if ( event.index === 2){

     await this.getSubscriptions();

    }//if

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

    const response = await this.profileService.getSubscriber(this.user._id, Constants.APP_LIMIT , this.OffsetSubscribe );
    console.log('users: ' , response.data );
    return;

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

    const response = await this.profileService.getSubscriptions(
      this.user._id,
      Constants.APP_LIMIT ,
      this.OffsetSubscriptions
    );

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
      }//else

    }//if
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

}
