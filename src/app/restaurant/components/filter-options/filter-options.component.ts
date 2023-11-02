import { Component, inject } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { DishCategory } from '../../interfaces/dish.interface';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styles: [
  ]
})
export class FilterOptionsComponent {

  private ordersService = inject(OrdersService)
  actualFilter : string = this.ordersService.actualFilter;


  changeFilter(event:MouseEvent): void{

    const filter : string = (event.target as HTMLInputElement).innerText; // obtiene el texto del elemento mouse
    this.ordersService.actualFilter = filter;
    this.actualFilter = this.ordersService.actualFilter;
    this.ordersService.filterDishes()
    console.log(this.ordersService.getDishes());

  }

}
