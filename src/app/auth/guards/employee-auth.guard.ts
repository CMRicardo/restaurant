import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const EmployeeAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const isAuthenticated = authService.checkEmployeeAuthStatus()
  if (!isAuthenticated) { router.navigateByUrl('/') }
  
  return isAuthenticated
};
