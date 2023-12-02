import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { RestaurantLayoutComponent } from './layouts/restaurant-layout/restaurant-layout.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantLayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent, title: 'Inicio | Brisas del Litoral' },
      { path: 'menu', component: MenuPageComponent, title: 'Menu Dígital | Brisas del Litoral' },
      { path: 'due-orders', component: OrdersPageComponent, title: 'Ordenes | Brisas del Litoral' },
      { path: 'employees', component: EmployeesPageComponent, title: 'Empleados | Brisas del Litoral' },
      { path: 'sales', component: SalesPageComponent, title: 'Ventas | Brisas del Litoral' },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
