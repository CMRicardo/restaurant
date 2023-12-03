import { Injectable, computed, signal } from '@angular/core';
import { MenuItem } from '../interfaces/menu-items.interface';
import { CurrentOrder } from '../interfaces/current-order.interface';

const DEFAULT_ORDER: CurrentOrder = {
  items: [],
  subtotal: 0,
  taxes: 0,
  total: 0
}

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private URL = 'https://restaurant-api.2.us-1.fl0.io/menu-items'
  private menuItems = signal<MenuItem[]>([])
  
  public currentOrder = signal<CurrentOrder>(DEFAULT_ORDER)
  public actualFilter = signal<string>('Entrada')
  public filteredMenuItems = computed(() => {
    return this.menuItems().filter(menuItem => menuItem.category === this.actualFilter())
  })

  public selectedItems = signal<MenuItem[]>([])

  public async getMenuItems() {
    try {
      const res = await fetch(this.URL)
      const data = await res.json()
      this.menuItems.set(data)
    } catch (error) {
      alert('Parece que tu conexión a internet falló')
    }
  }

}
