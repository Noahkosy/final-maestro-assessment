import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashboardComponent } from './tasks/components/task-dashboard/task-dashboard.component';


const routes:Routes = [ 
  { path: 'tasks', component: TaskDashboardComponent,},
  { path: 'tasks', loadChildren: () => import('./tasks/task.module').then(m => m.TaskModule) },
  { path: '**', redirectTo: 'tasks', },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppRoutingModule { }
