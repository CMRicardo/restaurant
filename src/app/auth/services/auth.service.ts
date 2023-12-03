import { Injectable, computed, inject, signal } from '@angular/core';
import { Employee, validatedCredentialsProps } from '../interfaces/employees-response.interface';
import { CustomerService } from 'src/app/customer/services/customer.service';
import { CustomerLoginProps } from '../interfaces/customer-login.interface';
import { Customer } from 'src/app/customer/interfaces/customer-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'https://restaurant-api.2.us-1.fl0.io/employees'
  private customerService = inject(CustomerService)
  public employees: Employee[] = []
  public currentUser?: Employee
  public currentCustomer = signal<Customer | undefined>(undefined)
  public customers = computed(() => this.customerService.customers())

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

  public async customerLogin({ email, password }: CustomerLoginProps) {
    const customerIndex = this.customers().findIndex( customer => {
      return customer.password === password && customer.email === email
    })
    
    if (customerIndex === -1) return
    return this.customers()[customerIndex]
  }
}
