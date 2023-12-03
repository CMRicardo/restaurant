import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { DeleteEmployeeProps } from '../../interfaces/props.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/auth/interfaces/employees-response.interface';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  templateUrl: './employees-page.component.html',
  styles: [
  ]
})
export class EmployeesPageComponent implements OnInit {
  private employeesService = inject(EmployeesService)
  private titleService = inject(TitleService)
  private snackBarService = inject(MatSnackBar)

  async ngOnInit(): Promise<void> {
    this.titleService.title.set('Empleados')
    if (this.employeesService.employees().length !== 0) return
    await this.employeesService.getEmployees()
  }

  public employees = computed(() => this.employeesService.employees())
  public showConfirmModal = false
  public showNewEmployeeForm = false
  public showEditEmployeeForm = false

  public userConfirmation = false
  public selectedEmployee = signal(this.employees()[0])
  public selectedEmployeeId = computed(() => this.employeesService.selectedEmployeeId())

  public openEditEmployeeForm(employee: Employee) {
    this.selectedEmployee.set(employee)
    this.showNewEmployeeForm = false
    this.showEditEmployeeForm = true
  }

  public closeEditEmployeeForm() {
    this.showEditEmployeeForm = false
  }

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
    this.showEditEmployeeForm = false
    this.showNewEmployeeForm = true
    newEmployee.disabled = true
  }
  public closeNewEmployeeForm(newEmployee: HTMLButtonElement) {
    this.showNewEmployeeForm = false
    newEmployee.disabled = false
  }

  public async openConfirmModal({ id = '' }) {
    this.showConfirmModal = true
    this.employeesService.selectedEmployeeId.set(id)
  }

  public closeConfirmModal() {
    this.showConfirmModal = false
  }

  public async getUserChoice(choice: Promise<boolean>) {
    this.userConfirmation = await choice
    this.delete({ id: this.selectedEmployeeId() })
  }
}
