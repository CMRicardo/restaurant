import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const EmployeeNoAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  
  const isAuth = authService.checkEmployeeAuthStatus()
  if (isAuth) { router.navigateByUrl('app') }
  return !isAuth;
};
