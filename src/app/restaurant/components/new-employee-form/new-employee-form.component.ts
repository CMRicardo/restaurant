import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styles: [
  ]
})
export class NewEmployeeFormComponent {
  private formBuilder = inject(FormBuilder)
  private employeesService = inject(EmployeesService)

  public myForm = this.formBuilder.group({
    idNumber: ['0511201103483', [Validators.required, Validators.minLength(13)]],
    firstName: ['Daniel', [Validators.required, Validators.minLength(3)]],
    secondName: ['Alejandro', [Validators.minLength(5)]],
    firstSurName: ['Corrales', [Validators.required, Validators.minLength(5)]],
    secondSurName: ['Montoya', [Validators.minLength(5)]],
    phoneNumber: ['12345678', [Validators.minLength(8), Validators.maxLength(8)]],
    employeeType: ['Gerente', [Validators.required]],
    email: ['daniel@litoral.com', [Validators.required, Validators.email]],
    password: ['admin123', [Validators.required, Validators.minLength(6)]],
    address: ['Villanueva', [Validators.required, Validators.minLength(10)]],
    profilePic: ['https://randomuser.me/api/portraits/lego/1.jpg', [Validators.required]]
  })

  @Output() public onClose: EventEmitter<boolean> = new EventEmitter()

  public closeForm() {
    this.onClose.emit(true)
  }

  public saveEmployee() {
    if (this.myForm.invalid) {
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
  }
}
