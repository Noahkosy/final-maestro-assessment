import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'apps/web/src/app/components/dashboard/dashboard.component';


const routes:Routes = [ 
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'lazy-add',
    loadChildren: () => import('apps/web/src/app/routers/lazy-add/lazy-add.module').then(m => m.LazyAddModule)
  },
  {
    path: 'lazy-read',
    loadChildren: () => import('apps/web/src/app/routers/lazy-read/lazy-read.module').then(m => m.LazyReadModule)
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppRoutingModule { }
