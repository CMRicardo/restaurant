import { Injectable } from '@angular/core';
import { Sale } from '../interfaces/sales-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  async getSales(): Promise<Sale[]> {
    const res = await fetch('https://litoral-restaurant-api.1.us-1.fl0.io/sales')
    const sales = await res.json()
    return sales
  }

}
