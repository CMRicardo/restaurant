import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dish } from '../../interfaces/dish.interface';
import { Dish1 } from '../../interfaces/dish1.constant';

@Component({
  templateUrl: './menu-list.component.html',
  selector: "app-menu-list",
  styles: [
  ]
})
export class MenuListComponent {
  @Input() public dishes: Dish1[] = []
  @Output() public onSelect: EventEmitter<Dish1[]> = new EventEmitter()

  public selectedDishes: Dish1[] = []

  onAdd(index: number) {
    const selectedDish = this.dishes[index]

    if (this.selectedDishes.includes(selectedDish)) {
      this.selectedDishes = this.selectedDishes.filter(dish => dish !== selectedDish)
    } else {
      this.selectedDishes.push(selectedDish)
    }
    this.onSelect.emit(this.selectedDishes)
  }
}
