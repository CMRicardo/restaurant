import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { EmployeesService } from '../../services/employees.service';
import { Employee } from 'src/app/auth/interfaces/employees-response.interface';

@Component({
  selector: 'edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styles: [
  ]
})

export class EditEmployeeFormComponent {
  private formBuilder = inject(FormBuilder)
  private employeesService = inject(EmployeesService)
  private snackBarService = inject(MatSnackBar)

  private onlyLettersRegex = /^[A-Za-z]+$/
  private idNumberLengthRegex = /^.{13}$/
  private phoneNumberRegex = /^\d{8}$/

  @Input() public employee!: Employee
  public myForm!: FormGroup
  private initializeForm(): void {
    this.myForm = this.formBuilder.group({
      idNumber: [this.employee.idNumber, [Validators.required, Validators.pattern(this.idNumberLengthRegex)]],
      firstName: [this.employee.firstName, [Validators.required, Validators.minLength(3), Validators.pattern(this.onlyLettersRegex)]],
      secondName: [this.employee.secondName, [Validators.minLength(5), Validators.pattern(this.onlyLettersRegex)]],
      firstSurName: [this.employee.lastName, [Validators.required, Validators.minLength(5), Validators.pattern(this.onlyLettersRegex)]],
      secondSurName: [this.employee.secondSurName, [Validators.minLength(5), Validators.pattern(this.onlyLettersRegex)]],
      phoneNumber: [this.employee.phoneNumber, [Validators.required, Validators.pattern(this.phoneNumberRegex)]],
      employeeType: [this.employee.employeeType, [Validators.required]],
      email: [this.employee.email, [Validators.required, Validators.email]],
      password: [this.employee.password, [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [this.employee.password, [Validators.required, Validators.minLength(6)]],
      address: [this.employee.address, [Validators.required, Validators.minLength(10)]],
      profilePic: [this.employee.profilePictureUrl, [Validators.required]]
    })
  }


  ngOnInit(): void {
    this.initializeForm()
  }


  @Output() public onClose: EventEmitter<void> = new EventEmitter()


  public closeForm() { this.onClose.emit() }

  public modifyEmployee() {
    if (this.myForm?.get('password')?.value !== this.myForm?.get('passwordConfirm')?.value) {
      this.myForm?.get('passwordConfirm')?.setErrors({
        notEqualToPassword: true
      })
      this.snackBarService.open('Las contraseñas no coinciden', 'Error', { duration: 4000 })
      return
    }
    if (this.myForm?.invalid) {
      this.snackBarService.open('Algo hizo mal', '', { duration: 4000 })
      return
    }

    const data = {
      idNumber: this.myForm?.get('idNumber')?.value,
      firstName: this.myForm?.get('firstName')?.value,
      secondName: this.myForm?.get('secondName')?.value,
      lastName: this.myForm?.get('firstSurName')?.value,
      phoneNumber: Number(this.myForm?.get('phoneNumber')?.value),
      employeeType: this.myForm?.get('employeeType')?.value,
      email: this.myForm?.get('email')?.value,
      password: this.myForm?.get('password')?.value,
      address: this.myForm?.get('address')?.value,
      profilePictureUrl: this.myForm?.get('profilePic')?.value,
    }

    this.employeesService.updateEmployee({ id: this.employeesService.selectedEmployeeId(), data })
    this.closeForm()
    this.snackBarService.open('Empleado agregado con éxito', '', { duration: 4000 })
  }
}
