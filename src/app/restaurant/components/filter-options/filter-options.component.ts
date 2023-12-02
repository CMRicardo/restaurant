import { Component, computed, inject } from '@angular/core';
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styles: [
  ]
})
export class FilterOptionsComponent {
  private ordersService = inject(OrdersService)

  public currentFilter = computed(() => this.ordersService.actualFilter());

  changeFilter(event: MouseEvent): void {
    const filter: string = (event.target as HTMLButtonElement).innerText;
    if (filter === 'Entradas') {
      this.ordersService.actualFilter.set('Entrada');
    }
    if (filter === 'Platos Fuertes') {
      this.ordersService.actualFilter.set('Plato fuerte');
    }
    if (filter === 'Bebidas') {
      this.ordersService.actualFilter.set('Bebida');
    }
    if (filter === 'Postres') {
      this.ordersService.actualFilter.set('Postre');
    }
    console.log(this.ordersService.filteredDishes());
  }

}
