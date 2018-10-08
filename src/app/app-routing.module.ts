import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizeComponent } from './components/authorize/authorize.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LotComponent } from './components/lot/lot.component';
import { CardLotComponent } from './components/cardLot/cardLot.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'lot',
        component: LotComponent
      },
      {
        path: 'card-lot',
        component: CardLotComponent
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
