import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styles: [
  ]
})
export class NewEmployeeFormComponent {
  private formBuilder = inject(FormBuilder)
  private employeesService = inject(EmployeesService)
  private snackBarService = inject(MatSnackBar)
  private onlyLettersRegex = /^[A-Za-z]+$/
  private idNumberLengthRegex = /^.{13}$/
  private phoneNumberRegex = /^\d{8}$/

  public myForm = this.formBuilder.group({
    idNumber: ['0511201103483', [Validators.required, Validators.pattern(this.idNumberLengthRegex)]],
    firstName: ['Daniel', [Validators.required, Validators.minLength(3), Validators.pattern(this.onlyLettersRegex)]],
    secondName: ['Alejandro', [Validators.minLength(5), Validators.pattern(this.onlyLettersRegex)]],
    firstSurName: ['Corrales', [Validators.required, Validators.minLength(5), Validators.pattern(this.onlyLettersRegex)]],
    secondSurName: ['Montoya', [Validators.minLength(5), Validators.pattern(this.onlyLettersRegex)]],
    phoneNumber: ['12345678', [Validators.required, Validators.pattern(this.phoneNumberRegex)]],
    employeeType: ['Gerente', [Validators.required]],
    email: ['daniel@litoral.com', [Validators.required, Validators.email]],
    password: ['admin123', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['admin123', [Validators.required, Validators.minLength(6)]],
    address: ['Villanueva', [Validators.required, Validators.minLength(10)]],
    profilePic: ['https://randomuser.me/api/portraits/lego/1.jpg', [Validators.required]]
  })

  @Output() public onClose: EventEmitter<void> = new EventEmitter()

  public closeForm() { this.onClose.emit() }

  public saveEmployee() {
    if (this.myForm.invalid) {
      this.snackBarService.open('Algo hizo mal', '', { duration: 4000 })
      return
    }
    if (this.myForm.get('password')?.value !== this.myForm.get('passwordConfirm')?.value) {
      this.snackBarService.open('Las contraseñas no coinciden', 'Error', {duration: 4000})
      return
    }

    const data = {
      idNumber: this.myForm.get('idNumber')?.value,
      firstName: this.myForm.get('firstName')?.value,
      secondName: this.myForm.get('secondName')?.value,
      lastName: this.myForm.get('firstSurName')?.value,
      phoneNumber: Number(this.myForm.get('phoneNumber')?.value),
      employeeType: this.myForm.get('employeeType')?.value,
      email: this.myForm.get('email')?.value,
      password: this.myForm.get('password')?.value,
      address: this.myForm.get('address')?.value,
      profilePictureUrl: this.myForm.get('profilePic')?.value,
    }

    this.employeesService.createEmployee(data)
    this.closeForm()
    this.snackBarService.open('Empleado agregado con éxito', '', { duration: 4000 })
  }
}
