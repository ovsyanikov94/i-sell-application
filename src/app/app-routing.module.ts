import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizeComponent } from './components/authorize/authorize.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LotComponent } from './components/lot/lot.component';
import { CardLotComponent } from './components/cardLot/cardLot.component';
const routes: Routes = [
  {
    path: 'authorize',
    component: AuthorizeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
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
    path: "**",
    //component: AuthorizeComponent
    //component: LotComponent
    component: CardLotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
