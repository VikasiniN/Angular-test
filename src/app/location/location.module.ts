import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';

import { LocationRoutingModule } from './location-routing.module';
import { ListComponent } from './list/list.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [ListComponent, CitiesListComponent, ResultComponent],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
