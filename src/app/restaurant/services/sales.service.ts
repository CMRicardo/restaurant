import { Injectable, signal } from '@angular/core';
import { Item, Sale } from '../interfaces/sales-response.interface';
import { CurrentOrder } from 'src/app/customer/interfaces/current-order.interface';

interface getSalesProps {
  initialDate?: string
  finalDate?: string
}

interface updateSaleProps {
  id: string
  input: {}
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io/sales'
  public sales = signal<Sale[]>([])

  async getSales({ initialDate, finalDate }: getSalesProps = {}): Promise<Sale[]> {
    let url = `${this.API_URL}`
    if (initialDate && finalDate) url = url + `?initialDate=${initialDate}&endDate=${finalDate}`

    const res = await fetch(url)
    const sales: Sale[] = await res.json()
    const orderedSales = sales.sort((sale1, sale2) => {
      const date1 = new Date(sale1.date);
      const date2 = new Date(sale2.date);
      return date1.getTime() - date2.getTime();
    })
    this.sales.set(orderedSales)
    return orderedSales
  }

  async updateSale({ id, input }: updateSaleProps) {
    const body = {
      id,
      ...input
    } 
    const result = await fetch(`${this.API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (!result.ok) return
    this.getSales()
  }

  async createSale(input: CurrentOrder ) {
    const items: Item[] = input.items.map(({name, price, quantity}) => ({ name, price, quantity }))

    const sale = {
      date: new Date().toString(),
      status: 'Pendiente',
      sellerId: '9cfeab80-834b-11ee-b53e-eaf15ba8dff1',
      seller: 'Alice Smith',
      items,
      subtotal: input.subtotal,
      taxes: input.taxes,
      total: input.total
    }

    const saleJSON = JSON.stringify(sale)

    const res = await fetch(this.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: saleJSON
    })

    if (!res.ok) return
    const newSale: Sale = await res.json()
    return newSale
  }
}
