import { Component, computed, inject } from '@angular/core';
import { Dish } from '../../interfaces/dish.interface';
import { OrdersService } from '../../services/orders.service';
import { Dish1 } from '../../interfaces/dish1.constant';

@Component({
  templateUrl: './menu-page.component.html',
  styles: [
  ]
})
export class MenuPageComponent {
  private ordersService = inject(OrdersService)
  public dishes = computed(() => this.ordersService.filteredDishes())
  public selectedDishes: Dish[] = []
  public modifyElemet : Dish1 = {
    name: 'hosd',
    imgUrl: null,
    category: 'Plato Fuerte',
    price :33
  };



  public onSelect(dishes: Dish[]) {
    this.selectedDishes = dishes
    console.log('seleciionado' + this.modifyElemet.name);

    console.log(this.selectedDishes);
  }


}
