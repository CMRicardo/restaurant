import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantLayoutComponent } from './layouts/restaurant-layout/restaurant-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ComplaintsPageComponent } from './pages/complaints-page/complaints-page.component';

@NgModule({
  declarations: [
    RestaurantLayoutComponent,
    HomePageComponent,
    NewOrderPageComponent,
    MenuPageComponent,
    OrdersPageComponent,
    ComplaintsPageComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule
  ]
})
export class RestaurantModule { }
