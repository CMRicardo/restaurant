import { Component, OnInit, computed, inject } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { DeleteEmployeeProps } from '../../interfaces/props.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './employees-page.component.html',
  styles: [
  ]
})
export class EmployeesPageComponent implements OnInit {
  private employeesService = inject(EmployeesService)
  private snackBarService = inject(MatSnackBar)

  async ngOnInit(): Promise<void> {
    await this.employeesService.getEmployees()
  }
  public showConfirmModal = false
  public employees = computed(() => this.employeesService.employees())
  public showNewEmployeeForm = false
  public userConfirmation = false
  public selectedEmployeeId = ''

  async delete({ id }: DeleteEmployeeProps) {
    if (!this.userConfirmation) return
    this.userConfirmation = false
    const employeeIndex = this.employeesService.employees().findIndex(employee => employee.id === id)
    if (employeeIndex === -1) {
      this.snackBarService.open('El empleado no existe', '', { duration: 4000 })
      return
    }

    await this.employeesService.deleteEmployee({ id })
    this.snackBarService.open('Empleado borrado exitosamente', '', { duration: 4000 })
  }

  public openNewEmployeeForm(newEmployee: HTMLButtonElement) {
    this.showNewEmployeeForm = true
    newEmployee.disabled = true
  }
  public closeNewEmployeeForm(newEmployee: HTMLButtonElement) {
    this.showNewEmployeeForm = false
    newEmployee.disabled = false
  }

  public async openConfirmModal({ id = '' }) {
    this.showConfirmModal = true
    this.selectedEmployeeId = id
  }

  public closeConfirmModal() {
    this.showConfirmModal = false
  }

  public async getUserChoice(choice: Promise<boolean>) {
    this.userConfirmation = await choice
    this.delete({ id: this.selectedEmployeeId })
  }
}
