import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'quantity-modal',
  templateUrl: './quantity-modal.component.html',
  styles: [
  ]
})
export class QuantityModalComponent {
  private formBuilder = inject(FormBuilder)

  @Input() question: string = '¿Cuánto quiere?'
  @Output() onChoice: EventEmitter<Promise<number>> = new EventEmitter()
  @Output() onClose: EventEmitter<void> = new EventEmitter()

  public numberRegex: RegExp = /^[1-9]\d*$/;
  public quantityForm = this.formBuilder.group({
    quantity: [ '0', [Validators.required, Validators.pattern(this.numberRegex)] ]
  }
  )

  public close() { this.onClose.emit() }

  public selectQuantity() {
    if (!this.quantityForm.get('quantity')) return
    if (this.quantityForm.get('quantity')?.invalid) return
    const quantity = Number(this.quantityForm.get('quantity')?.value)
    
    const promise = new Promise<number>(resolve => resolve(quantity))
    this.onChoice.emit(promise)
    this.close()
  }
}
