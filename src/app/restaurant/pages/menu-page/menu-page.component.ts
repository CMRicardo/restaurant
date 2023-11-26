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
  public messageForDuplicatedForms : string ="Por favor guardar o cancelar los cambios primero"

  public onSelect(dishes: Dish[]) {
    //verifica que no este activo el otro formulario
    if (!this.addNewDish) {
      if (dishes.length > 0) {
        this.modifyElemet = dishes[dishes.length - 1]
      } else {
        this.modifyElemet= {
          name: 'default',
          imgUrl: null,
          category: 'elig',
          price: 33
        };
      }
    } else {
      this._snackBar.open(this.messageForDuplicatedForms, '', {
        duration: 4000,
      });
    }

  }
  newDish() {
    if (this.modifyElemet.name !== 'default') {
      this._snackBar.open(this.messageForDuplicatedForms, '', {
        duration: 4000,

        verticalPosition: 'bottom', // Puedes ajustar la posición vertical según tus necesidades

      });
    } else {
      this.addNewDish = true;
    }
  }

  cancelForm(confirm: boolean) : void {
    this.addNewDish = confirm;
  }

}
