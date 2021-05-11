import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FireResolver } from '../core/services/fire.resolver.service';

import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


const routes:Routes = [
  { path: 'create', component: TaskAddComponent },
  { path: ':id', component: TaskDetailComponent, resolve: { task: FireResolver}, data: { foo: "bar"}
  }
];



@NgModule({
  providers:[FireResolver],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TaskModule { }
