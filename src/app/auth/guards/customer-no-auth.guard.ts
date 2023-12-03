import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const CustomerNoAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const isAuth = authService.checkCustomerAuthStatus()
  if (isAuth) { router.navigateByUrl('customer') }
  return !isAuth;
};
