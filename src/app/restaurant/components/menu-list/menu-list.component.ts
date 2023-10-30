import { Component, inject } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Dish } from '../../interfaces/dish.interface';

@Component({
  templateUrl: './menu-list.component.html',
  selector: "app-menu-list",
  styles: [
  ]
})
export class MenuListComponent {
  private ordersService = inject(OrdersService)

  public dishes: Dish[] = this.ordersService.dishes

  public selectedDishes: Dish[] = []

  onAdd(index: number) {
    const selectedDish = this.dishes[index]
    
    if (this.selectedDishes.includes(this.dishes[index])) {
      this.selectedDishes = this.selectedDishes.filter(dish => dish !== this.dishes[index])
    } else {
      this.selectedDishes.push(selectedDish)
    }
    
    console.log(this.selectedDishes)
    
  }
}
