import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  private router = inject(Router)
  private formBuilder = inject(FormBuilder)

  public myForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  get email() {
    return this.myForm.get('email')
  }

  get password() {
    return this.myForm.get('password')
  }

  public togglePasswordVisibility(passwordInput: HTMLInputElement, buttonIcon: HTMLImageElement) {
    buttonIcon.src = 'assets/icons/shared/eye.svg'
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text'
    if (passwordInput.type === 'text') buttonIcon.src = 'assets/icons/shared/eye_no.svg'
  }

  public login(e: SubmitEvent): void {
    e.preventDefault()

    if (this.myForm.invalid) {
      return
    }

    this.router.navigateByUrl('app/home')
  }
}
