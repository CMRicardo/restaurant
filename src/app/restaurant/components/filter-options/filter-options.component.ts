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
    this.ordersService.actualFilter.set(filter);
    console.log(this.ordersService.filteredDishes());
  }

}
