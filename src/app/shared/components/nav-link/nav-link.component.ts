import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styles: [
  ]
})
export class NavLinkComponent {
  @Input() url: string = ''
  @Input() iconName: string = ''
  @Input() alt: string = ''
}
