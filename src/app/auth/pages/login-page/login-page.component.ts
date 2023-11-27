import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  private router = inject(Router)
  private authService = inject(AuthService)
  private formBuilder = inject(FormBuilder)
  
  async ngOnInit(): Promise<void> {
    await this.authService.getUsers()
  }
  
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

  public login(): void {
    if (this.myForm.invalid) return
    const email = String(this.email?.value)
    const password = String(this.password?.value)
    if (!email && !password) return

    this.authService.currentUser = this.authService.validatedCredentials({ email, password })
    if (this.authService.currentUser){
      this.router.navigateByUrl('app/home')
      return
    }
    // Cambiar por un error
    alert('Credenciales no validas')
  }
}
