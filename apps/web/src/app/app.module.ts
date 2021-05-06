import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from 'apps/web/src/app/components/dashboard/dashboard.component';
import { AddTaskComponent } from 'apps/web/src/app/components/add-task/add-task.component';
import { ReadTaskComponent } from 'apps/web/src/app/components/read-task/read-task.component';

import { environment } from 'apps/web/src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import {  myDatePipe } from './pipes/my-date-pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { RatingInputComponent } from './components/rating-input/rating-input.component';



@NgModule({
  declarations: [AppComponent, DashboardComponent,AddTaskComponent,ReadTaskComponent, myDatePipe, HighlightDirective, RatingInputComponent],
  imports: [BrowserModule, AppRoutingModule, 
    AngularFirestoreModule, AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
  
  ],
  providers:[],
  bootstrap:[AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
