import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizeComponent } from './components/authorize/authorize.component';
import { RegistrationComponent } from './components/registration/registration.component';

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
    path: "**",
    component: AuthorizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
