import { Component, Input, inject, signal } from '@angular/core';

import { MenuItem } from '../../interfaces/menu-items.interface';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styles: [
  ]
})
export class MenuItemComponent {
  private menuItemService = inject(MenuItemService)
  
  @Input() menuItem!: MenuItem
  public isSelected = signal(false)
  ngOnInit() {
    this.isSelected.set(this.menuItemService.selectedItems().includes(this.menuItem))
    console.log(this.isSelected());
    
  }
}
