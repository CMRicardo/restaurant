import { Component, computed, inject } from '@angular/core';
import { Dish } from '../../interfaces/dish.interface';
import { OrdersService } from '../../services/orders.service';
import { Dish1 } from '../../interfaces/dish1.constant';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  templateUrl: './menu-page.component.html',
  styles: [
  ]
})
export class MenuPageComponent {

  constructor(private _snackBar: MatSnackBar) { }

  private ordersService = inject(OrdersService)
  public dishes = computed(() => this.ordersService.filteredDishes())
  public selectedDishes: Dish[] = []
  public modifyElemet: Dish1 = {
    name: 'default',
    imgUrl: null,
    category: 'elig',
    price: 33
  };
  addNewDish: boolean = false;


  public onSelect(dishes: Dish[]) {
    this.selectedDishes = dishes
    console.log(dishes);

    if (this.selectedDishes.length > 0) {
      this.modifyElemet = this.selectedDishes[this.selectedDishes.length - 1]
    }else{
      this.modifyElemet.name= 'default';
    }
    console.log(this.selectedDishes);
  }

  newDish() {

    if (this.modifyElemet.name !== 'default') {
      this._snackBar.open('Guardar o descartar la modificaion del platillo primero', '', {
        duration: 4000,
      });

    }else{
      this.addNewDish = true;
    }
  }

}
