import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';
import { AppInputTextComponent } from './common/app-input-text/app-input-text.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { StudentFormComponent } from './common/student-form/student-form.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireFunctionsModule} from "@angular/fire/compat/functions";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AddEditStudentComponent } from './common/add-edit-student/add-edit-student.component';
import {Router, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'registration', component: RegistrationComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ListComponent,
    AppInputTextComponent,
    StudentFormComponent,
    AddEditStudentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
