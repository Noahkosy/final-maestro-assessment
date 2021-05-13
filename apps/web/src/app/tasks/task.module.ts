import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { TaskResolver } from '../core/services/task-data.resolver.service';
import { FormActionEnum } from '../shared/Interfaces/form-action.enum';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

const routes:Routes = [
  { path: 'create', component: TaskFormComponent, data: { formAction: FormActionEnum.CREATE }},
  { path: ':id', component: TaskDetailComponent, resolve: { task: TaskResolver}}, 
  { path: ':id/edit', component: TaskFormComponent, resolve: { task: TaskResolver}, data: { formAction: FormActionEnum.EDIT }},
];

@NgModule({
  providers:[TaskResolver, AppRoutingModule],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TaskModule { }
