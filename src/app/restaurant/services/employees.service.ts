import { Injectable, signal } from '@angular/core';
import { Employee } from 'src/app/auth/interfaces/customers-response.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io/employees'
  // public employees: Employee[] = []
  public employees = signal<Employee[]>([])

  public async getEmployees() {
    const res = await fetch(this.API_URL)
    const data = await res.json()
    this.employees.set(data)
  }

  public async deleteEmployee({id = ''}) {
    const result = await fetch(`${this.API_URL}/${id}`, {
      method: 'DELETE'
    })

  }
}
