import { Component, Input } from '@angular/core';
import { Dish } from '../../interfaces/dish.interface';

@Component({
  templateUrl: './menu-list.component.html',
  selector: "app-menu-list",
  styles: [
  ]
})
export class MenuListComponent {
  @Input() public dishes: Dish[] = []

  public selectedDishes: Dish[] = []

  onAdd(index: number) {
    const selectedDish = this.dishes[index]

    if (this.selectedDishes.includes(this.dishes[index])) {
      this.selectedDishes = this.selectedDishes.filter(dish => dish !== this.dishes[index])
    } else {
      this.selectedDishes.push(selectedDish)
    }
  }
}
