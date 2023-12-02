import { Component, computed, inject } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  selector: 'current-order',
  templateUrl: './current-order.component.html',
  styles: [
  ]
})
export class CurrentOrderComponent {
  private menuItemService = inject(MenuItemService)
  public currentOrder = computed(() => this.menuItemService.currentOrder())
}
