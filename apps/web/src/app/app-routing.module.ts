import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashboardComponent } from './tasks/components/task-dashboard/task-dashboard.component';


const routes:Routes = [ 
  { path: 'tasks', component: TaskDashboardComponent,},
  { path: 'tasks', loadChildren: () => import('./tasks/task.module').then(m => m.TaskModule) },
  { path: '**', component: TaskDashboardComponent, },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppRoutingModule { }
