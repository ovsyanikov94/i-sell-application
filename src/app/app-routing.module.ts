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
import {ListDialogsComponent} from './components/list-dialogs/list-dialogs.component';
import {MyDialogsComponent} from './components/my-dialogs/my-dialogs.component';
import {PasswordRecoveryRequestComponent} from './components/password-recovery-request/password-recovery-request.component';
import {PasswordRecoveryConfirmComponent} from './components/password-recovery-confirm/password-recovery-confirm.component';
import {LotResolverService} from './services/lot/lot-resolver.service';
import {AuthGuard} from './guards/auth.guard';
import {BiddingComponent} from "./components/bidding/bidding.component";

const routes: Routes = [

  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },

  {
    path: 'main',
    component: MainComponent,
    canActivateChild: [ AuthGuard ],
    children: [
      {
        path: '',
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
        path: 'list-dialog',
        component: ListDialogsComponent
      },
      {
        path: 'my-dialog/:userLogin',
        component: MyDialogsComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
      {
        path: 'bidding',
        component: BiddingComponent,

      },
    ]
  },
  {
    path: 'lot/:id',
    component: LotComponent,
    resolve: {
      lotResponse: LotResolverService,
    }
  },
  {
    path: 'card-lot',
    component: CardLotComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'authorize',
    component: AuthorizeComponent
  },
  {
    path: 'recovery',
    component: PasswordRecoveryRequestComponent
  },
  {
    path: 'recovery/confirm',
    component: PasswordRecoveryConfirmComponent
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

