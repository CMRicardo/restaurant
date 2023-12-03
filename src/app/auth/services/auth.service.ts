import { Injectable, computed, inject, signal } from '@angular/core';
import { Employee, validatedCredentialsProps } from '../interfaces/employees-response.interface';
import { CustomerService } from 'src/app/customer/services/customer.service';
import { CustomerLoginProps } from '../interfaces/customer-login.interface';
import { Customer } from 'src/app/customer/interfaces/customer-response.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private customerService = inject(CustomerService)
  private router = inject(Router)

  private readonly API_URL = 'https://litoral-api.up.railway.app/employees'
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
    localStorage.setItem('currentCustomer', JSON.stringify(this.customers()[customerIndex]))
    return this.customers()[customerIndex]
  }

  public customerLogout() {
    this.currentCustomer.set(undefined)
    localStorage.removeItem('currentCustomer')
    this.router.navigateByUrl('auth/customer-login')
  }

  checkCustomerAuthStatus() {
    const currentCustomerJSON = localStorage.getItem('currentCustomer')
    if (!currentCustomerJSON) return false
    const currentCustomer: Customer = JSON.parse(currentCustomerJSON)
    this.currentCustomer.set(currentCustomer)
    return Boolean(currentCustomer)
  }

  public async registerCustomer(data = {}) {
    const newCustomer = await this.customerService.createCustomer(data)
    return newCustomer
  }
}
