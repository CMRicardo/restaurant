import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

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

  public login(event: SubmitEvent) {
    event.preventDefault()
    this.router.navigateByUrl('customer/new-order')
  }
}
