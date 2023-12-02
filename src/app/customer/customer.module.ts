import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { SharedModule } from '../shared/shared.module';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { QuantityModalComponent } from './components/quantity-modal/quantity-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrentOrderComponent } from './components/current-order/current-order.component';


@NgModule({
  declarations: [
    CurrentOrderComponent,
    CustomerLayoutComponent,
    FilterOptionsComponent,
    MenuItemComponent,
    MenuListComponent,
    NewOrderPageComponent,
    QuantityModalComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class CustomerModule { }
