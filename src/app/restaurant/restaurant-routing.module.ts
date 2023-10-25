import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantLayoutComponent } from './layouts/restaurant-layout/restaurant-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantLayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'new-order', component: NewOrderPageComponent },
      { path: 'menu', component: MenuPageComponent },
      { path: 'orders', component: OrdersPageComponent },
      { path: '**', redirectTo: 'home' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
