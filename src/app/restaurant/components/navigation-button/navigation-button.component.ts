import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styles: [
  ]
})
export class NavigationButtonComponent {
  @Input() url: string = ''
  @Input() title: string = ''
  @Input() imageUrl: string = ''
  @Input() color: string = ''
}
