import { Injectable, computed, signal } from '@angular/core';
import { Dish,DishCategory } from '../interfaces/dish.interface';
import { dishes } from '../constants/dishes.constant';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private dishes =  signal<Dish[]>(dishes)

  public actualFilter: string = DishCategory[1];

 public getDishes = computed(()=>this.dishes())
 public filterDishes(): void{
      this.dishes.set(this.dishes().filter(dish=>dish.category === this.actualFilter));

  }

}
