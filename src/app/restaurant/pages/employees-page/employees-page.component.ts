import { Component, OnInit, computed, inject } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { DeleteEmployeeProps } from '../../interfaces/props.interface';

@Component({
  templateUrl: './employees-page.component.html',
  styles: [
  ]
})
export class EmployeesPageComponent implements OnInit {
  private employeesService = inject(EmployeesService)

  async ngOnInit(): Promise<void> {
    await this.employeesService.getEmployees()
  }

  public employees = computed(() => this.employeesService.employees())
  public showNewEmployeeForm = false

  async delete({ id }: DeleteEmployeeProps) {
    const employeeIndex = this.employeesService.employees().findIndex(employee => employee.id === id)
    if (employeeIndex === -1) {
      alert('El empleado no existe')
      return
    }
    const employee = this.employeesService.employees()[employeeIndex]
    const confirmation = prompt(`¿Está seguro de que quiere eliminar a ${employee.firstName} ${employee.lastName}?`)

    const isOk = Boolean(confirmation)
    if (!isOk) return
    await this.employeesService.deleteEmployee({ id })
  }

  public openNewEmployeeForm(newEmployee: HTMLButtonElement) {
    this.showNewEmployeeForm = true
    newEmployee.disabled = true
  }
  public closeNewEmployeeForm(event: boolean, newEmployee: HTMLButtonElement) {
    this.showNewEmployeeForm = false
    newEmployee.disabled = false
  }
}
