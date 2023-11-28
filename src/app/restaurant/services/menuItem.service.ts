import { Dish1 } from './../interfaces/dish1.constant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io/menu-items'

  async getAllMenuItems(): Promise<Dish1[]> {
    const url = this.API_URL;
    const response = await fetch(url);

    if (response.ok) {
      const menuItems: Dish1[] = await response.json();
      return menuItems;
    } else {
      throw new Error(`Error al obtener elementos de menú. Código de estado: ${response.status}`);
    }
  }
}




