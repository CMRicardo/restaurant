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
import { PromotionsPageComponent } from './pages/promotions-page/promotions-page.component';
import { RecordsPageComponent } from './pages/records-page/records-page.component';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';

@NgModule({
  declarations: [
    RestaurantLayoutComponent,
    HomePageComponent,
    NewOrderPageComponent,
    MenuPageComponent,
    OrdersPageComponent,
    ComplaintsPageComponent,
    PromotionsPageComponent,
    RecordsPageComponent,
    NavigationButtonComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule
  ]
})
export class RestaurantModule { }
