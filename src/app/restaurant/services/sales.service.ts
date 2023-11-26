import { Injectable } from '@angular/core';
import { Sale } from '../interfaces/sales-response.interface';
interface getSalesProps {
  initialDate?: string
  finalDate?: string
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io'
  
  async getSales({initialDate, finalDate}: getSalesProps = {}): Promise<Sale[]> {
    let url = `${this.API_URL}/sales`
    if (initialDate && finalDate) url = url + `?initialDate=${initialDate}&endDate=${finalDate}`

    const res = await fetch(url)
    const sales: Sale[] = await res.json()
    const orderedSales = sales.sort((sale1, sale2) => {
      const date1 = new Date(sale1.date);
      const date2 = new Date(sale2.date);
      return date1.getTime() - date2.getTime();
    })
    return orderedSales
  }

}
