import { Dish1 } from './../interfaces/dish1.constant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private API_URL = 'https://restaurant-api.2.us-1.fl0.io'

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

  async deleteMenuItem(menuItemId: string): Promise<void> {
    const url = `${this.API_URL}/menu-items/${menuItemId}`;

    const requestOptions: RequestInit = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
        throw new Error(`Error al eliminar el elemento del menú. Código de estado: ${response.status}`);
    }
}

async updateMenuItem( updatedData: Dish1): Promise<void> {
    const url = `${this.API_URL}/menu-items/${updatedData.id}`;

    const requestOptions: RequestInit = {
        method: 'PATCH',  // Cambiado a método PATCH para una solicitud de actualización parcial
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    };

    try {
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`Error al actualizar el elemento del menú. Código de estado: ${response.status}`);
        }
    } catch (error) {
        console.error('Error al realizar la solicitud de actualización:', error);
        throw error;
    }
}



}




