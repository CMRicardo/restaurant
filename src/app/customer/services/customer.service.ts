import { Injectable, signal } from '@angular/core';
import { Customer } from '../interfaces/customer-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'https://restaurant-api.2.us-1.fl0.io/customers'
  public customers = signal<Customer[]>([])

  public async getCustomers(){
    const res = await fetch(this.API_URL)
    if (!res.ok) return
    const data = await res.json()
    this.customers.set(data)
  }
  public async createCustomer(data = {}) {
    const res = await fetch(this.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) return
    const newCustomer: Customer = await res.json()
    await this.getCustomers()
    return newCustomer
  }
}
