import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styles: [
  ]
})
export class ConfirmModalComponent {
  @Input() question: string = 'Debes cambiar esto!!!'
  @Output() onChoice: EventEmitter<Promise<boolean>> = new EventEmitter()
  @Output() onClose: EventEmitter<void> = new EventEmitter()

  public close() {
    this.onClose.emit()
  }

  public confirm() {
    const promise = new Promise<boolean>((resolve) => {
      resolve(true)
    })
    this.onChoice.emit(promise)
    this.close()
  }

  public async decline() {
    const promise = new Promise<boolean>((resolve) => {
      resolve(false)
    })
    this.onChoice.emit(promise)
    this.close()
  }
}
