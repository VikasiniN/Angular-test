import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {CitiesListComponent} from './cities-list/cities-list.component';
import {ResultComponent} from './result/result.component';
const routes: Routes = [{
  path:'list',
  component:ListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
