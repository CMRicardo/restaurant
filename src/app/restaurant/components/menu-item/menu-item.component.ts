import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',

})
export class MenuItemComponent {

  @Input()
  urlImage : string = "https://unsplash.it/640/425"
}
