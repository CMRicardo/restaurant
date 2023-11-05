import { Component, Input } from '@angular/core';
import { SelectedDish } from '../../interfaces/selected-dish.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent {
  @Input() headers: string[] = ["ID", "Nombre", "Cantidad", "Precio", "Subtotal"]
  @Input() rows: SelectedDish[] = []
}
