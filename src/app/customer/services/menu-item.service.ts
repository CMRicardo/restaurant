import { Injectable, computed, signal } from '@angular/core';
import { MenuItem } from '../interfaces/menu-items.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private URL = 'https://litoral-restaurant-api.1.us-1.fl0.io/menu-items'

  private menuItems = signal<MenuItem[]>([])
  public actualFilter = signal<string>('Entrada')
  public filteredMenuItems = computed(() => {
    return this.menuItems().filter(menuItem => menuItem.category === this.actualFilter())
  })

  public selectedItems = signal<MenuItem[]>([])

  public async getMenuItems() {
    const res = await fetch(this.URL)
    const data = await res.json()
    this.menuItems.set(data)
  }

}
