import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from "./admin-routing.module";

import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

//MY COMPONENTS
import { ShowRolesComponent } from './components/show-roles/show-roles.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { DeleteRoleModalComponent } from './modals/delete-role-modal/delete-role-modal.component';
import { SingleLotApproveComponent } from './components/single-lot-approve/single-lot-approve.component';
import { LotsListTableComponent } from './components/lots-list-table/lots-list-table.component';
import { RejectModalComponent } from './modals/reject-modal/reject-modal.component';
import { LotNotificationComponent } from './components/lot-notification/lot-notification.component';
import {AuthorizeComponent} from './components/authorize/authorize.component';
import {PasswordRecoveryConfirmComponent} from './components/password-recovery-confirm/password-recovery-confirm.component';
import {PasswordRecoveryRequestComponent} from './components/password-recovery-request/password-recovery-request.component';
import {RegistrationComponent} from './components/registration/registration.component';
import { AddModeratorComponent } from './components/add-moderator/add-moderator.component';
import { MessageModalComponent } from './modals/message-modal/message-modal.component';
import { LotComponent } from './components/lot/lot.component';
import { CommentComponent } from './components/comment/comment.component';
import { AuthModalComponent } from './modals/auth.modal/auth.modal.component';
import {DeleteCategoryModalComponent} from "./modals/deleteCategory.modal/deleteCategory.modal.component";
import {MainComponent} from './components/main/main.component';
import {CategoryComponent} from './components/category/category.component';
import {MainContentComponent} from "./components/main-content/main-content.component";
import { PersonalDataComponent } from "./components/personal-data/personal-data.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { SingleLotComponent } from "./components/single-lot/single-lot.component";
import { SingleUserComponent } from "./components/single-user/single-user.component";

//SLIDER
import { SliderModule } from 'angular-image-slider';

//MATREIAL
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {
  MatBadgeModule, MatDividerModule, MatPaginatorModule, MatSidenavModule, MatSortModule,
  MatTabsModule
} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import { ApprovedLotComponent } from './components/approved-lot/approved-lot.component';
import { RejectLotComponent } from './components/reject-lot/reject-lot.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';


//FILTERS
import {FilterLengthPipe} from './filters/myfilter';

//SERVICES
import {AddUserService} from "./services/user/add-user.service";
//SERVICES
import { CategoryService } from './services/category/category.service';
import {CommonModule} from '@angular/common';

@NgModule({

  declarations: [
    ShowRolesComponent,
    AdminProfileComponent,
    ApprovedLotComponent,
    RejectLotComponent,
    MainComponent,
    MainContentComponent,
    CategoryComponent,
    DeleteCategoryModalComponent,
    DeleteRoleModalComponent,
    PersonalDataComponent,
    UserListComponent,
    SingleLotComponent,
    SingleUserComponent,
    LotComponent,
    CommentComponent,
    FilterLengthPipe,
    SingleLotApproveComponent,
    LotsListTableComponent,
    LotNotificationComponent,
    RejectModalComponent,
    AuthorizeComponent,
    PasswordRecoveryConfirmComponent,
    PasswordRecoveryRequestComponent,
    RegistrationComponent,
    AuthModalComponent,
    AddModeratorComponent,
    MessageModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MaterialFileInputModule,
    MatIconModule,
    MatSidenavModule,
    SliderModule,
    MatBadgeModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatSnackBarModule,
    HttpClientModule,

  ],

  providers: [
    CategoryService,
    AddUserService
  ],

  entryComponents: [
    DeleteCategoryModalComponent,
    DeleteRoleModalComponent,
    RejectModalComponent,
    AuthModalComponent,
    DeleteRoleModalComponent,
    MessageModalComponent
  ],
})
export class AdminModule { }
