import { Component, computed, inject } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Dish } from '../../interfaces/dish.interface';

@Component({
  templateUrl: './new-order-page.component.html',
  styles: [
  ]
})
export class NewOrderPageComponent {
  private ordersService = inject(OrdersService)

  public dishes = computed(() => this.ordersService.filteredDishes())
  public selectedDishes: Dish[] = []

  public onSelect(dishes: Dish[]) {
    this.selectedDishes = dishes
  }
}
