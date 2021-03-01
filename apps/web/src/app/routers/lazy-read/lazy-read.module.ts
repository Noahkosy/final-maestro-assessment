import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadTaskComponent } from 'apps/web/src/app/components/read-task/read-task.component';

const routes: Routes = [
  { path: ':id', component: ReadTaskComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class LazyReadModule { }
