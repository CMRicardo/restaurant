import { Dish1 } from './../interfaces/dish1.constant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io'

  async getAllMenuItems(): Promise<Dish1[]> {
    const url = `${this.API_URL}/menu-items`;
    const response = await fetch(url);

    if (response.ok) {
      const menuItems: Dish1[] = await response.json();
      return menuItems;
    } else {
      throw new Error(`Error al obtener elementos de menú. Código de estado: ${response.status}`);
    }
  }
  async createNewMenuItem(newMenuItem: Dish1): Promise<void> {


    const url = `${this.API_URL}/menu-items`;
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMenuItem),
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Error al crear un nuevo plato. Código de estado: ${response.status}`);
    }
  }



}



