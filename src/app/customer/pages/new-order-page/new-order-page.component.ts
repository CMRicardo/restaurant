import { Component, computed, inject } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-items.interface';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  selector: 'app-new-order-page',
  templateUrl: './new-order-page.component.html',
  styles: [
  ]
})
export class NewOrderPageComponent {
  private menuItemsService = inject(MenuItemService)

  public showQuantityModal = false
  public menuItems = computed(() => this.menuItemsService.filteredMenuItems())
  public currentItem: MenuItem = this.menuItems()[0]

  async ngOnInit() {
    if (this.menuItemsService.filteredMenuItems().length !== 0) return
    await this.menuItemsService.getMenuItems()
  }

  public openQuantityModal(menuItem: MenuItem) {
    this.showQuantityModal = true
    this.currentItem = menuItem
  }

  public closeQuantityModal() { this.showQuantityModal = false }

  public async getUserQuantity(quantityPromise: Promise<number>) {
    const quantity = await quantityPromise
    this.menuItemsService.currentOrder.update(current => {
      const items = [...current.items, {...this.currentItem, quantity}]
      let subtotal = 0
      items.forEach(item => subtotal += item.price * quantity)
      const taxes = subtotal * 0.15
      const total = subtotal + taxes

      return {
        ...current,
        items,
        subtotal,
        taxes,
        total
      }
    })
  }
}
