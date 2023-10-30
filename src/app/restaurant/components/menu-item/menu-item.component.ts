import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',

})
export class MenuItemComponent {

  @Input()
  urlImage: string = "https://unsplash.it/640/425"
  @Input() name: string = "dish_name"

  public isSelected = false

  changeActiveState(): void {
    this.isSelected = !this.isSelected
  }
}
