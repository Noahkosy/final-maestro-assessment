import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskResolver } from '../core/services/task-data.resolver.service';

import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

const routes:Routes = [
  { path: 'create', component: TaskAddComponent },
  { path: ':id', component: TaskDetailComponent, resolve: { task: TaskResolver}, data: { foo: "bar"}},
  { path: ':id/edit', component: TaskAddComponent, resolve: { task: TaskResolver}, data: { foo: "bar"}},
];

@NgModule({
  providers:[TaskResolver],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TaskModule { }
