import { Injectable } from '@angular/core';
import { Sale } from '../interfaces/sales-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io'

  async getSales(): Promise<Sale[]> {
    const res = await fetch(`${this.API_URL}/sales`)
    const sales: Sale[] = await res.json()
    const orderedSales = sales.sort((sale1, sale2) => {
        const convertedDate1 = new Date(sale1.date);
        const convertedDate2 = new Date(sale2.date);
        return convertedDate1.getTime() - convertedDate2.getTime();
    })
    return orderedSales
  }

}
