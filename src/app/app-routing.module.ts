import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './shared/pages/welcome-page/welcome-page.component';
import { CustomerAuthGuard } from './auth/guards/customer-auth.guard';
import { EmployeeAuthGuard } from './auth/guards/employee-auth.guard';

const routes: Routes = [
  { path: '', component: WelcomePageComponent, title: 'Brisas del Litoral' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'app',
    canActivate: [EmployeeAuthGuard],
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule)
  },
  {
    path: 'customer',
    canActivate: [CustomerAuthGuard],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
