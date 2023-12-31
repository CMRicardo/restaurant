import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerNoAuthGuard } from './guards/customer-no-auth.guard';
import { EmployeeNoAuthGuard } from './guards/employee-no-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'customer-login', canActivate: [CustomerNoAuthGuard], component: CustomerLoginComponent, title: 'Login Clientes | Brisas del Litoral' },
      { path: 'login', canActivate: [EmployeeNoAuthGuard], component: LoginPageComponent, title: 'Login | Brisas del Litoral' },
      { path: 'register', component: RegisterPageComponent, title: 'Registro | Brisas del Litoral' },
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
