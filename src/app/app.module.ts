import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MY-COMPONENTS
import { AuthorizeComponent } from './components/authorize/authorize.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthModalComponent } from './modals/auth.modal/auth.modal.component';
import { LotComponent } from './components/lot/lot.component';
import { CardLotComponent } from './components/cardLot/cardLot.component';
import { MainComponent } from './components/main/main.component';
import { BlacklistComponent } from './components/blacklist/blacklist.component';
import { BlockBlackListComponent } from './components/block-black-list/block-black-list.component';

//ANGULAR IMAGE SLIDER
import { SliderModule } from 'angular-image-slider';
//ANGULAR SEARCH
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
//ANGULAR-MATERIAL
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { BlockSubscribersComponent } from './components/block-subscribers/block-subscribers.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [

    AppComponent,
    AuthorizeComponent,
    RegistrationComponent,
    AuthModalComponent,
    LotComponent,
    CardLotComponent,
    MainComponent,
    BlacklistComponent,
    BlockBlackListComponent,
    SubscriberComponent,
    BlockSubscribersComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    SliderModule,
    NgMatSearchBarModule,
    MatExpansionModule
  ],
  providers: [
  ],
  entryComponents: [
    AuthModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
