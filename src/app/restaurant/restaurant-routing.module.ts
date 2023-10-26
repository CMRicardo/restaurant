import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantLayoutComponent } from './layouts/restaurant-layout/restaurant-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ComplaintsPageComponent } from './pages/complaints-page/complaints-page.component';
import { PromotionsPageComponent } from './pages/promotions-page/promotions-page.component';
import { RecordsPageComponent } from './pages/records-page/records-page.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantLayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent, title: 'Inicio | Brisas del Litoral' },
      { path: 'new-order', component: NewOrderPageComponent, title: 'Nueva Orden | Brisas del Litoral' },
      { path: 'menu', component: MenuPageComponent, title: 'Menu Dígital | Brisas del Litoral' },
      { path: 'orders', component: OrdersPageComponent, title: 'Ordenes | Brisas del Litoral' },
      { path: 'complaints', component: ComplaintsPageComponent, title: 'Quejas y Reclamos | Brisas del Litoral' },
      { path: 'promotions', component: PromotionsPageComponent, title: 'Promociones | Brisas del Litoral' },
      { path: 'records', component: RecordsPageComponent, title: 'Registros | Brisas del Litoral' },
      { path: '**', redirectTo: 'home' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
