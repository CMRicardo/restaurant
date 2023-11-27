import { Injectable } from '@angular/core';
import { Employee, validatedCredentialsProps } from '../interfaces/employees-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io/employees'
  public employees: Employee[] = []
  public currentUser?: Employee

  public validatedCredentials({ email, password }: validatedCredentialsProps) {
    const employeeIndex = this.employees.findIndex(employee => {
      return employee.password === password && employee.email === email
    })
    if (employeeIndex === -1) return

    return this.employees[employeeIndex]
  }

  public async getUsers() {
    const res = await fetch(this.API_URL)
    const data = await res.json()
    this.employees = data
  }
}
