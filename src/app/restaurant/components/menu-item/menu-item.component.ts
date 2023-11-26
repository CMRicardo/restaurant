import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',

})
export class MenuItemComponent {
  public isSelected = false

  @Input() urlImage: string = "https://unsplash.it/640/425"
  @Input() name: string = "dish_name"

  changeActiveState(): void {
    this.isSelected = !this.isSelected
  }
}
