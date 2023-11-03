import { Injectable, computed, signal } from '@angular/core';
import { Dish, DishCategory } from '../interfaces/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private dishes = signal<Dish[]>([
    { id: '0', name: 'Sopa', imgUrl: 'https://unsplash.it/640/425', category: 'Plato Fuerte', price: 3.00 },
    { id: '1', name: 'Carne', imgUrl: 'https://unsplash.it/640/426', category: 'Plato Fuerte', price: 3.00 },
    { id: '2', name: 'Ensalada', imgUrl: 'https://unsplash.it/640/427', category: 'Entradas', price: 3.00 },
    { id: '3', name: 'Helado', imgUrl: 'https://unsplash.it/640/428', category: 'Postres', price: 3.00 },
    { id: '4', name: 'Vino Tinto', imgUrl: 'https://unsplash.it/640/428', category: 'Bebidas', price: 3.00 },
  ])

  public actualFilter = signal<string>(DishCategory[1]);
  public filteredDishes = computed(() => this.dishes().filter(dish => dish.category === this.actualFilter()))
}
