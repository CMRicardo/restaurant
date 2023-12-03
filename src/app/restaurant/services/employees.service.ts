import { Injectable, signal } from '@angular/core';
import { Employee } from 'src/app/auth/interfaces/employees-response.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private API_URL = 'https://litoral-api.up.railway.app/employees'
  public employees = signal<Employee[]>([])

  public selectedEmployeeId = signal<string>('')

  public async getSingleEmployee({ id = '' }): Promise<Employee> {
    const res = await fetch(`${this.API_URL}/${id}`)
    const employee = await res.json()
    return employee
  }

  public async getEmployees() {
    const res = await fetch(this.API_URL)
    const data = await res.json()
    this.employees.set(data)
  }

  public async deleteEmployee({ id = '' }) {
    const result = await fetch(`${this.API_URL}/${id}`, {
      method: 'DELETE'
    })
    if (!result.ok) {
      alert('Algo salió mal')
      return
    }
    this.getEmployees()
  }

  public async createEmployee(employee: {}) {
    const employeeAsJSON = JSON.stringify(employee)
    const res = await fetch(`${this.API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: employeeAsJSON
    })
    if (!res.ok) return
    await this.getEmployees()
  }

  public async updateEmployee({ id = '', data = {} }) {
    const updatedEmployeeJSON = JSON.stringify(data)
    const res = await fetch(`${this.API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: updatedEmployeeJSON
    })
    if (!res.ok) return
    await this.getEmployees()
  }
}
