import { Component, OnInit, inject } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from 'src/app/auth/interfaces/customers-response.interface';
import { DeleteEmployeeProps } from '../../interfaces/props.interface';

@Component({
  templateUrl: './employees-page.component.html',
  styles: [
  ]
})
export class EmployeesPageComponent implements OnInit {
  private employeesService = inject(EmployeesService)
  public employees: Employee[] = []

  async ngOnInit(): Promise<void> {
    await this.employeesService.getEmployees()
    this.employees = this.employeesService.employees()
  }

  delete({id}: DeleteEmployeeProps) {
    
  }
}
