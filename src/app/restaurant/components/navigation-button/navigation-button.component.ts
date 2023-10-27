import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
})
export class NavigationButtonComponent {
  @Input() url: string = ''
  @Input() title: string = ''
  @Input() color: string = ''
}
