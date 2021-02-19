import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTaskComponent } from 'apps/web/src/app/components/add-task/add-task.component';


const routes:Routes = [
  { path: '', component: AddTaskComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class LazyAddModule { }
