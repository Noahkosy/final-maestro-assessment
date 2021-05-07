import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { TaskDashboardComponent } from './tasks/task-dashboard/task-dashboard.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

import {  myDatePipe } from './tasks/task-dashboard/my-date.pipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, TaskDashboardComponent,TaskAddComponent,TaskDetailComponent, myDatePipe,],
  imports: [BrowserModule, AppRoutingModule, 
    AngularFirestoreModule, AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule, SharedModule],
  providers:[],
  bootstrap:[AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
