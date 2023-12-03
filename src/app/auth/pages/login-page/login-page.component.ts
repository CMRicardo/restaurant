import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';
import { EmployeesService } from 'src/app/restaurant/services/employees.service';

@Component({
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  private router = inject(Router)
  private authService = inject(AuthService)
  private employeesService = inject(EmployeesService)
  private formBuilder = inject(FormBuilder)
  private snackBar = inject(MatSnackBar)
  
  async ngOnInit(): Promise<void> {
    if (this.employeesService.employees().length !== 0) return
    await this.employeesService.getEmployees()
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

    this.authService.currentEmployee.set(this.authService.validatedCredentials({ email, password }))
    if (this.authService.currentEmployee()){
      localStorage.setItem('currentEmployee', JSON.stringify(this.authService.currentEmployee()))
      this.router.navigateByUrl('app/home')
      return
    }

    this.snackBar.open('Credenciales incorrectas', 'Error', { duration: 4000 })
  }
}
