import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {Lot} from "../../models/lot/Lot";
import {MatTabChangeEvent} from "@angular/material";
import {AuthService} from "../../services/user/auth.service";
import {ProfileService} from "../../services/profile/profile.service";
import {ServerResponse} from "../../models/server/ServerResponse";
import {ActivatedRoute, Router} from '@angular/router';
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
        console.log('RESPONE', response);
        this.statusSubscribe = response.data;
      }//if
    } );

  }

  ngOnInit() {
  }


  onTabChanged(event: MatTabChangeEvent){

    if ( event.index === 1){
      this.getSubscribe();
    }
    if ( event.index === 2){
      this.getSubscriptions();
    }
  }//onTabChanged

  async getSubscribe() {

    const response = await this.profileService.getSubscriber(this.user);
    if ( response.status === 200){
      console.log(response.data);
      this.subscribers = response.data as User[];
      console.log('USER : ', this.subscribers);
    }
  }//getSubscribe

  async getSubscriptions() {

    const response = await this.profileService.getSubscriptions(this.user);
    if ( response.status === 200){
      console.log(response.data);
      this.Subscriptions = response.data as User[];
      console.log('USER : ', this.Subscriptions);
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
}
