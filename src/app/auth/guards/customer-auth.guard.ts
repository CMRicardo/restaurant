import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuard implements CanActivate {
  private authService = inject(AuthService)
  private router = inject(Router)

  private checkAuthStatus(): boolean | Observable<boolean> {
    const isAuthenticated = this.authService.checkCustomerAuthStatus()
    if(!isAuthenticated) { this.router.navigateByUrl('auth/customer-login') }
    return isAuthenticated
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkAuthStatus()
  }
  

}