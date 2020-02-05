import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrandComponent} from './brand/brand.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
path:'brand',
component: BrandComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
