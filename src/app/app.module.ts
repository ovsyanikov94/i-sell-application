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
import { BetModalComponent } from './modals/bet.modal/bet.modal.component';
import { CommentComponent } from './components/comment/comment.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ConfirmationLotComponent } from './components/confirmation-lot/confirmation-lot.component';
import { BlockSubscribersComponent } from './components/block-subscribers/block-subscribers.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { BlacklistComponent } from './components/blacklist/blacklist.component';
import { BlockBlackListComponent } from './components/block-black-list/block-black-list.component';
import { AddLotComponent } from './components/add-lot/add-lot.component';

//ANGULAR IMAGE SLIDER
import { SliderModule } from 'angular-image-slider';

//DATE-TIME PICKER
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

//FILE UPLOADER
import { MaterialFileInputModule } from 'ngx-material-file-input';

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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';

//FILTERS
import {FilterLengthPipe} from './filters/myfilter';
import { MyDialogsComponent } from './components/my-dialogs/my-dialogs.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [

    AppComponent,
    AuthorizeComponent,
    RegistrationComponent,
    AuthModalComponent,
    LotComponent,
    CardLotComponent,
    MainComponent,
    BetModalComponent,
    BlacklistComponent,
    BlockBlackListComponent,
    SubscriberComponent,
    BlockSubscribersComponent,
    ConfirmationLotComponent,
    MyProfileComponent,
    CommentComponent,
    FilterLengthPipe,
    AddLotComponent,
    MyDialogsComponent,
    ProfileComponent

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
    MatTabsModule,
    NgMatSearchBarModule,
    MatExpansionModule,
    MatRadioModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MaterialFileInputModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  providers: [
  ],
  entryComponents: [
    AuthModalComponent,
    BetModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
