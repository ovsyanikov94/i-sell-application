import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizeComponent } from './components/authorize/authorize.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LotComponent } from './components/lot/lot.component';
import { CardLotComponent } from './components/cardLot/cardLot.component';
import { MainComponent } from './components/main/main.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {ProfileComponent} from './components/profile/profile.component';
import { BlockBlackListComponent } from './components/block-black-list/block-black-list.component';
import { BlockSubscribersComponent } from './components/block-subscribers/block-subscribers.component';
import {ConfirmationLotComponent} from './components/confirmation-lot/confirmation-lot.component';
import { AddLotComponent } from "./components/add-lot/add-lot.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: CardLotComponent
      },
      {
        path: 'lot',
        component: LotComponent
      },
      {
        path: 'card-lot',
        component: CardLotComponent
      },
      {
        path: 'black-list',
        component: BlockBlackListComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
      },
      {
        path: 'subscribers',
        component: BlockSubscribersComponent
      },
      {
        path: 'confirmation',
        component: ConfirmationLotComponent
      },
      {
        path: "add-lot",
        component: AddLotComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
    ]
  },
  {
    path: 'authorize',
    component: AuthorizeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: "**",
    component: AuthorizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

