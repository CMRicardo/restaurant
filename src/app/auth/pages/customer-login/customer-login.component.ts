import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styles: [
  ]
})
export class CustomerLoginComponent {
  private router = inject(Router)
  private authService = inject(AuthService)
  private formBuilder = inject(FormBuilder)
  private snackBar = inject(MatSnackBar)

  private onlyTextRegex = /^[a-zA-Z ]{6,}$/

  public myForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(this.onlyTextRegex)]],
  })

  public togglePasswordVisibility(passwordInput: HTMLInputElement, buttonIcon: HTMLImageElement) {
    buttonIcon.src = 'assets/icons/shared/eye.svg'
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text'
    if (passwordInput.type === 'text') buttonIcon.src = 'assets/icons/shared/eye_no.svg'
  }

  public async login() {
    const email = String(this.myForm.get('email')?.value)
    const password = String(this.myForm.get('password')?.value)
    if (!email && !password) return

    const currentUser = await this.authService.customerLogin({ email, password })
    if (!currentUser) {
      this.snackBar.open('Credenciales incorrectas', 'Error', { duration: 4000 })
      return
    }
    this.router.navigateByUrl('customer/new-order')
  }
}
