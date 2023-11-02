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
import { PromotionsIconComponent } from './components/icons/promotions-icon/promotions-icon.component';
import { NewOrderIconComponent } from './components/icons/new-order-icon/new-order-icon.component';
import { MenuIconComponent } from './components/icons/menu-icon/menu-icon.component';
import { DueOrdersIconComponent } from './components/icons/due-orders-icon/due-orders-icon.component';
import { ComplaintsIconComponent } from './components/icons/complaints-icon/complaints-icon.component';
import { RecordsIconComponent } from './components/icons/records-icon/records-icon.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { EmployeeIconComponent } from './components/icons/employee-icon/employee-icon.component';
import { SalesIconComponent } from './components/icons/sales-icon/sales-icon.component';
import { SupplierIconComponent } from './components/icons/supplier-icon/supplier-icon.component';
import { ShoppingIconComponent } from './components/icons/shopping-icon/shopping-icon.component';

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
    NavigationButtonComponent,
    PromotionsIconComponent,
    NewOrderIconComponent,
    MenuIconComponent,
    DueOrdersIconComponent,
    ComplaintsIconComponent,
    RecordsIconComponent,
    MenuItemComponent,
    MenuListComponent,
    EmployeesPageComponent,
    SupplierPageComponent,
    SalesPageComponent,
    ShoppingPageComponent,
    EmployeeIconComponent,
    SalesIconComponent,
    SupplierIconComponent,
    ShoppingIconComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule
  ]
})
export class RestaurantModule { }
