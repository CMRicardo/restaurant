import { Component, computed, inject } from '@angular/core';
import { Dish } from '../../interfaces/dish.interface';
import { OrdersService } from '../../services/orders.service';

@Component({
  templateUrl: './menu-page.component.html',
  styles: [
  ]
})
export class MenuPageComponent {
  private ordersService = inject(OrdersService)

  public dishes = computed(() => this.ordersService.filteredDishes())

  public selectedDishes: Dish[] = []

  public onSelect(dishes: Dish[]) {
    this.selectedDishes = dishes

  }
}
