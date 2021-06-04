import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { TaskResolve } from '../core/services/task-data.resolve';
import { FormActionEnum } from '../shared/Interfaces/form-action.enum';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes:Routes = [
  { path: 'create', component: TaskFormComponent, data: { formAction: FormActionEnum.CREATE }},
  { path: ':id', component: TaskDetailComponent, resolve: { task: TaskResolve}}, 
  { path: ':id/edit', component: TaskFormComponent, resolve: { task: TaskResolve}, data: { formAction: FormActionEnum.EDIT }},
];

@NgModule({
  providers:[TaskResolve, AppRoutingModule],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TaskModule { }
