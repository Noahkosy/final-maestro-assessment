import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myDatePipe } from './shared/pipes/my-date.pipe';
import { SharedModule } from './shared/shared.module';
import { TaskDashboardComponent } from './tasks/components/task-dashboard/task-dashboard.component';
import { TaskDetailComponent } from './tasks/components/task-detail/task-detail.component';
import { TaskFooterComponent } from './tasks/components/task-footer/task-footer.component';
import { TaskFormComponent } from './tasks/components/task-form/task-form.component';
import { TaskNavComponent } from './tasks/components/task-nav/task-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskDashboardComponent,
        TaskFormComponent,
        TaskDetailComponent,
        TaskNavComponent,
        TaskFooterComponent,
        myDatePipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ReactiveFormsModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
