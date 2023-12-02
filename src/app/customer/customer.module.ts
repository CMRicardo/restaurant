import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewOrderPageComponent,
    CustomerLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
