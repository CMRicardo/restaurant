import { Injectable, signal } from '@angular/core';
import { Customer } from '../interfaces/customer-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io/customers'
  public customers = signal<Customer[]>([])

  public async getCustomers(){
    const res = await fetch(this.API_URL)
    if (!res.ok) return
    const data = await res.json()
    this.customers.set(data)
  }
}
