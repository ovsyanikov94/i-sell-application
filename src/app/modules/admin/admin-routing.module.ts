import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CategoryComponent } from './components/category/category.component';

import { ShowRolesComponent } from './components/show-roles/show-roles.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ApprovedLotComponent } from './components/approved-lot/approved-lot.component';
import { RejectLotComponent } from './components/reject-lot/reject-lot.component';
import {PersonalDataComponent} from './components/personal-data/personal-data.component'
import {UserListComponent} from './components/user-list/user-list.component';
import { LotComponent } from './components/lot/lot.component';
import {LotsListTableComponent} from './components/lots-list-table/lots-list-table.component';
import {SingleLotApproveComponent} from './components/single-lot-approve/single-lot-approve.component';
import {AuthorizeComponent} from './components/authorize/authorize.component';
import {PasswordRecoveryConfirmComponent} from './components/password-recovery-confirm/password-recovery-confirm.component';
import {PasswordRecoveryRequestComponent} from './components/password-recovery-request/password-recovery-request.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {AddModeratorComponent} from "./components/add-moderator/add-moderator.component";
import {LotsResolveService} from "./services/lot/lots-resolve.service";
import {SingleLotResolveService} from "./services/lot/single-lot-resolve.service";
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    //canActivateChild: [ AuthGuard ],
    children: [
      {
        path: '',
        component: AdminProfileComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'roles',
        component: ShowRolesComponent
      },
      {
        path: 'profile',
        component: AdminProfileComponent
      },
      {
        path: 'profile/:login',
        component: PersonalDataComponent
      },
      {
        path: 'approved-lot',
        component: ApprovedLotComponent
      },
      {
        path: 'rejected-lot',
        component: RejectLotComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path: 'approve-lot-request/:id',
        component: SingleLotApproveComponent,
        resolve: {
          singlelotResponse: SingleLotResolveService
        }
      },
      {
        path: 'lots-list',
        component: LotsListTableComponent,
        resolve: {
          lotsResponse: LotsResolveService
        }
      },
      {
        path: 'add-moderator',
        component: AddModeratorComponent
      },
      {
        path: 'lot',
        component: LotComponent
      },
    ],
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
