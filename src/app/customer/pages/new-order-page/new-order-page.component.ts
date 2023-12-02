import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-items.interface';
import { CurrentOrder } from '../../interfaces/current-order.interface';

const DEFAULT_ORDER: CurrentOrder = {
  items: [],
  subtotal: 0,
  taxes: 0,
  total: 0
}

@Component({
  selector: 'app-new-order-page',
  templateUrl: './new-order-page.component.html',
  styles: [
  ]
})
export class NewOrderPageComponent {
  public currentOrder = signal<CurrentOrder>(DEFAULT_ORDER)
  public showQuantityModal = false
  public quantity = 0

  public openQuantityModal(menuItem: MenuItem) {
    this.showQuantityModal = true
    console.log('Aquí estoy!');
    console.log(`Cambié showQuantityModal a: ${this.showQuantityModal}`);
  }

  public closeQuantityModal() { this.showQuantityModal = false }

  public async getUserQuantity(quantityPromise: Promise<number>) {
    const quantity = await quantityPromise
    this.quantity = quantity
  }
}
