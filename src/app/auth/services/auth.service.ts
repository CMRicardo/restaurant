import { Injectable, computed, inject, signal } from '@angular/core';
import { Employee, validatedCredentialsProps } from '../interfaces/employees-response.interface';
import { CustomerService } from 'src/app/customer/services/customer.service';
import { CustomerLoginProps } from '../interfaces/customer-login.interface';
import { Customer } from 'src/app/customer/interfaces/customer-response.interface';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/restaurant/services/employees.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router)
  private customerService = inject(CustomerService)
  private employeesService = inject(EmployeesService)

  public currentEmployee = signal<Employee | undefined>(undefined)
  public employees = computed(() => this.employeesService.employees())

  public currentCustomer = signal<Customer | undefined>(undefined)
  public customers = computed(() => this.customerService.customers())

  public validatedCredentials({ email, password }: validatedCredentialsProps) {
    const employeeIndex = this.employees().findIndex(employee => {
      return employee.password === password && employee.email === email
    })
    if (employeeIndex === -1) return

    return this.employees()[employeeIndex]
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

  public checkCustomerAuthStatus() {
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

  public employeeLogOut() {
    this.currentEmployee.set(undefined)
    localStorage.removeItem('currentEmployee')
    this.router.navigateByUrl('auth/login')
  }

  public checkEmployeeAuthStatus() {
    const currentEmployeeJSON = localStorage.getItem('currentEmployee')
    if (!currentEmployeeJSON) return false
    const currentEmployee: Employee = JSON.parse(currentEmployeeJSON)
    this.currentEmployee.set(currentEmployee)
    return Boolean(currentEmployee)
  }
}
