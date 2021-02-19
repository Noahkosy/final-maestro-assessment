import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from 'apps/web/src/app/components/dashboard/dashboard.component';
import { AddTaskComponent } from 'apps/web/src/app/components/add-task/add-task.component';
import { ReadTaskComponent } from 'apps/web/src/app/components/read-task/read-task.component';

import { environment } from 'apps/web/src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FirestoreService } from 'apps/web/src/app/services/firestore.service';


@NgModule({
  declarations: [AppComponent, DashboardComponent,AddTaskComponent,ReadTaskComponent],
  imports: [BrowserModule, AppRoutingModule, 
    AngularFirestoreModule, AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers:[FirestoreService,],
  bootstrap:[AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
