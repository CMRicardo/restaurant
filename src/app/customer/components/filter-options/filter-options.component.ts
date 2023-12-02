import { Component, computed, inject } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  selector: 'filter-options',
  templateUrl: './filter-options.component.html',
  styles: [
  ]
})
export class FilterOptionsComponent {
  private menuItemService = inject(MenuItemService)
  public actualFilter = computed(() => this.menuItemService.actualFilter())

  changeFilter(category: string) {
    this.menuItemService.actualFilter.set(category)
  }
}
