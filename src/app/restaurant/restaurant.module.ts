import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantLayoutComponent } from './layouts/restaurant-layout/restaurant-layout.component';

import { SharedModule } from '../shared/shared.module';

import { ComplaintsIconComponent } from './components/icons/complaints-icon/complaints-icon.component';
import { ComplaintsPageComponent } from './pages/complaints-page/complaints-page.component';
import { DueOrdersIconComponent } from './components/icons/due-orders-icon/due-orders-icon.component';
import { EmployeeIconComponent } from './components/icons/employee-icon/employee-icon.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuIconComponent } from './components/icons/menu-icon/menu-icon.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';
import { NewOrderIconComponent } from './components/icons/new-order-icon/new-order-icon.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { PromotionsIconComponent } from './components/icons/promotions-icon/promotions-icon.component';
import { PromotionsPageComponent } from './pages/promotions-page/promotions-page.component';
import { RecordsIconComponent } from './components/icons/records-icon/records-icon.component';
import { RecordsPageComponent } from './pages/records-page/records-page.component';
import { SalesIconComponent } from './components/icons/sales-icon/sales-icon.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ShoppingIconComponent } from './components/icons/shopping-icon/shopping-icon.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { SupplierIconComponent } from './components/icons/supplier-icon/supplier-icon.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { TableComponent } from './components/table/table.component';
import { FormularioPlatilloComponent } from './components/formulario-platillo/formulario-platillo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifyDishComponent } from './components/modify-dish/modify-dish.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewEmployeeFormComponent } from './components/new-employee-form/new-employee-form.component';


@NgModule({
  declarations: [
    ComplaintsIconComponent,
    ComplaintsPageComponent,
    DueOrdersIconComponent,
    EmployeeIconComponent,
    EmployeesPageComponent,
    FilterOptionsComponent,
    HomePageComponent,
    MenuIconComponent,
    MenuItemComponent,
    MenuListComponent,
    MenuPageComponent,
    NavigationButtonComponent,
    NewOrderIconComponent,
    NewOrderPageComponent,
    OrdersPageComponent,
    PromotionsIconComponent,
    PromotionsPageComponent,
    RecordsIconComponent,
    RecordsPageComponent,
    RestaurantLayoutComponent,
    SalesIconComponent,
    SalesPageComponent,
    SearchbarComponent,
    ShoppingIconComponent,
    ShoppingPageComponent,
    SupplierIconComponent,
    SupplierPageComponent,
    TableComponent,
    FormularioPlatilloComponent,
    ModifyDishComponent,
    NewEmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class RestaurantModule { }
