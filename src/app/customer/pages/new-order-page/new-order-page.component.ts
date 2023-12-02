import { Component, computed, inject } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-items.interface';
import { MenuItemService } from '../../services/menu-item.service';
import { SalesService } from 'src/app/restaurant/services/sales.service';

@Component({
  selector: 'app-new-order-page',
  templateUrl: './new-order-page.component.html',
  styles: [
  ]
})
export class NewOrderPageComponent {
  private menuItemsService = inject(MenuItemService)
  private salesService = inject(SalesService)

  public showQuantityModal = false
  public menuItems = computed(() => this.menuItemsService.filteredMenuItems())
  public currentItem: MenuItem = this.menuItems()[0]
  public itemsInOrder = computed(() => this.menuItemsService.currentOrder().items)

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
      const TAX_PERCENTAGE = 0.15
      const taxes = subtotal * TAX_PERCENTAGE
      const total = subtotal + taxes

      return {
        items,
        subtotal,
        taxes,
        total
      }
    })
  }

  public async payOrder() {
    if (this.menuItemsService.currentOrder().items.length === 0) return
    await this.salesService.createSale(this.menuItemsService.currentOrder())
    await this.salesService.getSales()
    alert('Pagado con éxito')
  }

  public cancelOrder() {
    this.menuItemsService.currentOrder.set({ items: [], subtotal: 0, taxes: 0, total: 0 })
  }
}
