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
    category: 'elig',
    price :33
  };
  addNewDish: boolean = false;


  public onSelect(dishes: Dish[]) {
    this.selectedDishes = dishes
    if (this.selectedDishes.length>0) {
      this.modifyElemet = this.selectedDishes[this.selectedDishes.length - 1]
      console.log(this.modifyElemet);

    }
    console.log(this.selectedDishes);
  }

  newDish() {
    if (this.selectedDishes.length>0) {

    }
    this.addNewDish = true;
  }

}
