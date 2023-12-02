import { Component, computed, inject } from '@angular/core';

import { MenuItemService } from '../../services/menu-item.service';
import { MenuItem } from '../../interfaces/menu-items.interface';

@Component({
  selector: 'menu-list',
  templateUrl: './menu-list.component.html',
  styles: [
  ]
})
export class MenuListComponent {
  private menuItemService = inject(MenuItemService)
  public menuItems = computed(() => this.menuItemService.filteredMenuItems())
  public selectedItems = computed(() => this.menuItemService.selectedItems())

  async ngOnInit() {
    if (this.menuItemService.filteredMenuItems().length !== 0 ) return
    await this.menuItemService.getMenuItems()
  }

  selectItem(menuItem: MenuItem) {
    this.menuItemService.selectedItems.update((current) => {
      return [...current, menuItem]
    })
  }
}
