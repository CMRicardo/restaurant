import { MenuItemService } from './../../services/menuItem.service';
import { Component, computed, inject } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Dish1 } from '../../interfaces/dish1.constant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TitleService } from 'src/app/shared/services/title.service';


@Component({
  templateUrl: './menu-page.component.html',
  styles: [
  ]
})
export class MenuPageComponent {
  private titleService = inject(TitleService)

  ngOnInit(): void {
    this.titleService.title.set('Menú Digital')
  }

  constructor(private _snackBar: MatSnackBar) { }
  private ordersService = inject(OrdersService)
  public dishes = computed(() => this.ordersService.filteredDishes())
  public modifyElemet: Dish1 = {
    name: 'default',
    imageUrl: null,
    category: 'elig',
    price: 33
  };
  addNewDish: boolean = false;
  public messageForDuplicatedForms: string = "Por favor guardar o cancelar los cambios primero"


  public onSelect(dishes: Dish1[]) {
    //verifica que no este activo el otro formulario
    if (!this.addNewDish) {
      // verificar que la lista no este vacia
      if (dishes.length > 0) {
        //ultimo elemento en la lista = variable a modificar
        this.modifyElemet = dishes[dishes.length - 1]
      } else {
        // si la lista se vacia de nuevo resetar los valores
        this.modifyElemet = {
          name: 'default',
          imageUrl: null,
          category: 'elig',
          price: 33
        };
      }
    } else {
      // el otro formulario esta abierto, por lo tanto mandar un mensae de error
      this._snackBar.open(this.messageForDuplicatedForms, '', {
        duration: 4000,
      });
    }

  }
  //click en el boton de agreagar platillo
  newDish() {
    //verificar que el elemento por modificar no sea por el defecto
    if (this.modifyElemet.name !== 'default') {
      // si es por el defecto mandar un mensaje de error
      this._snackBar.open(this.messageForDuplicatedForms, '', {
        duration: 4000,
        verticalPosition: 'bottom', // Puedes ajustar la posición vertical según tus necesidades

      });
    } else {
      // de otra manera activar el formulario
      this.addNewDish = true;
    }
  }

  // cuando se de click en el boton de cancelar del formulario de nuevo platillo
  cancelForm(confirm: boolean): void {
    // poner en falso la visualizacion de dicho formulario
    this.addNewDish = confirm;
  }

  // click en el boton cancelar del formulario para modificar
  cancelModifyForm(valor: boolean): void {
    // reseteamos los valores, porque el formulario se renderiza si name !== default
    this.modifyElemet = {
      name: 'default',
      imageUrl: null,
      category: 'elig',
      price: 33
    };

  }




}
