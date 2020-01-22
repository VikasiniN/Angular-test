import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [HeaderComponent, RegistrationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
   
  ],
  exports: [HeaderComponent]
})
export class HomeModule { }
