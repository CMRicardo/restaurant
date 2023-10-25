import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  private router = inject(Router)

  login(e: MouseEvent): void {
    e.preventDefault()
    console.log('Hola mundo!');
    this.router.navigateByUrl('app/home')
  }
}
