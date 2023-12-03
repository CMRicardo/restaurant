import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {
  private formBuilder = inject(FormBuilder)
  private snackBar = inject(MatSnackBar)
  private authService = inject(AuthService)
  private router = inject(Router)

  private readonly onlyLettersRegex = /^[A-Za-z]+$/
  private readonly phoneNumberRegex = /^\d{8}$/

  public myForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern(this.onlyLettersRegex)]],
    secondName: ['', [Validators.pattern(this.onlyLettersRegex)]],
    lastName: ['', [Validators.required, Validators.pattern(this.onlyLettersRegex)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(this.phoneNumberRegex)]],
    address: ['', [Validators.required, Validators.minLength(6)]]
  })

  public async register() {
    if (!this.myForm.valid) return
    const passwordsAreEqual = this.myForm.get('password')?.value === this.myForm.get('passwordConfirm')?.value
    if (!passwordsAreEqual) {
      this.snackBar.open('Las contraseñas no coinciden')
      return
    }
    const data = {
      firstName: this.myForm.get('firstName')?.value,
      secondName: this.myForm.get('secondName')?.value,
      lastName: this.myForm.get('lastName')?.value,
      email: this.myForm.get('email')?.value,
      password: this.myForm.get('password')?.value,
      phoneNumber: Number(this.myForm.get('phoneNumber')?.value),
      address: this.myForm.get('address')?.value,
    }

    const newCustomer = await this.authService.registerCustomer(data)
    if (!newCustomer) {
      this.snackBar.open('El registro salió mal', 'Error', { duration: 4000 })
      return
    }
    this.snackBar.open('Registro realizado con éxito', '', { duration: 4000 })
    await this.authService.customerLogin({ email: newCustomer.email, password: newCustomer.password })
    this.router.navigateByUrl('customer')
  }
}
