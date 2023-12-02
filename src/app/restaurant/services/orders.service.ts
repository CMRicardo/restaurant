import { dishes } from './../constants/dishes.constant';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Dish, DishCategory } from '../interfaces/dish.interface';
import { MenuItemService } from './menuItem.service';
import { Dish1 } from '../interfaces/dish1.constant';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private dishes = signal<Dish1[]>([
    { id: '0', name: 'Sopa', imageUrl: 'https://unsplash.it/640/425', category: 'Plato Fuerte', price: 3.00 },
    { id: '1', name: 'Carne', imageUrl: 'https://unsplash.it/640/426', category: 'Plato Fuerte', price: 3.00 },
    { id: '2', name: 'Ensalada', imageUrl: 'https://unsplash.it/640/427', category: 'Entradas', price: 3.00 },
    { id: '3', name: 'Helado', imageUrl: 'https://unsplash.it/640/428', category: 'Postres', price: 3.00 },
    { id: '4', name: 'Vino Tinto', imageUrl: 'https://unsplash.it/640/428', category: 'Bebidas', price: 3.00 },
  ])

  private menuItemService = inject(MenuItemService)
  public actualFilter = signal<string>(DishCategory[1]);
  public filteredDishes = computed(() => this.dishes().filter(dish => dish.category.toLowerCase() === this.actualFilter().toLowerCase()))
  constructor() {
    //this.try()
    this.initializeDishes();

  }

  private try(): void {
    console.log(this.dishes());

  }
  private async initializeDishes() {
    try {
      const menuItems = await this.menuItemService.getAllMenuItems();

      this.dishes.set(menuItems);
    } catch (error: any) {
      console.error('Error initializing dishes:', error.message);
    }
    console.log(this.dishes());
  }

  changeFilterWithInput(dish: Dish1): void {
    this.actualFilter.set(dish.category);
  }

  whenAddNewDish(dish: Dish1): void {
    this.dishes.update((currentDishes) => [...currentDishes, dish]);
    this.changeFilterWithInput(dish);
  }

  whenDeleteDish(dish: Dish1): void {
    this.dishes.update((currentDishes) => currentDishes.filter((item) => item.id !== dish.id));
    this.changeFilterWithInput(dish);
  }
}



