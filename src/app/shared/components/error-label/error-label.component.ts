import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-label',
  templateUrl: './error-label.component.html',
  styles: [
  ]
})
export class ErrorLabelComponent {
  @Input() message: string = ''
}
