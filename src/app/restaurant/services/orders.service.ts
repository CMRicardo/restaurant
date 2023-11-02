import { Injectable, computed, signal } from '@angular/core';
import { Dish,DishCategory } from '../interfaces/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private dishes =  signal<Dish[]>([
    { id: '0', name: 'Sopa', imgUrl: 'https://unsplash.it/640/425' ,category :'Plato Fuerte' },
    { id: '1', name: 'Carne', imgUrl: 'https://unsplash.it/640/426',category :'Plato Fuerte' },
    { id: '2', name: 'Pasta', imgUrl: 'https://unsplash.it/640/427',category :'Plato Fuerte' },
    { id: '3', name: 'Helado', imgUrl: 'https://unsplash.it/640/428',category :'Postres'}
  ])

  public actualFilter: string = DishCategory[1];

 public getDishes = computed(()=>this.dishes())
 public filterDishes(): void{
      this.dishes.set(this.dishes().filter(dish=>dish.category === this.actualFilter));

  }

}
