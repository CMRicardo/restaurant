import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styles: [
  ]
})
export class CustomerInfoComponent {
  private authService = inject(AuthService)
  public currentCustomer = computed(() => this.authService.currentCustomer())
  public isLogOutButtonVisible = signal(false)

  public toggleLogOutButtonVisibility() {
    this.isLogOutButtonVisible.update(value => !value)
  }

  public logOut() {
    this.authService.customerLogout()
  }
}
