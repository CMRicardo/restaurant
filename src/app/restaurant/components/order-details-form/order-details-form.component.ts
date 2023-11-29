import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sale } from '../../interfaces/sales-response.interface';
import { SalesService } from '../../services/sales.service';

interface CancelOrderProps {
  id: string
}

interface ConcludeOrderProps {
  id: string
}

@Component({
  selector: 'order-details-form',
  templateUrl: './order-details-form.component.html',
  styles: [
  ]
})
export class OrderDetailsFormComponent {
  private salesService = inject(SalesService)

  @Input() public order!: Sale
  @Output() public onClose: EventEmitter<boolean> = new EventEmitter()
  public showConfirmModal = false
  public userConfirm = false
  public action = ''

  public closeForm() {
    this.onClose.emit(true)
  }

  public async cancelOrder({ id }: CancelOrderProps) {
    if (!this.userConfirm) return
    const body = {
      status: 'Reembolso'
    }
    await this.salesService.updateSale({ id, input: body })
    this.closeForm()
  }

  public async concludeOrder({ id }: ConcludeOrderProps) {
    if (!this.userConfirm) return
    const body = {
      status: 'Concluida'
    }
    await this.salesService.updateSale({ id, input: body })
    this.closeForm()
  }



  public openConfirmModal({ action = 'Cancel' }) {
    this.showConfirmModal = true
    if (action === 'cancel' || action === 'conclude') {
      this.action = action
      return
    }
  }

  public closeConfirmModal() {
    this.showConfirmModal = false
  }

  public async getUserChoice(choicePromise: Promise<boolean>) {
    this.userConfirm = await choicePromise
    if (this.action === 'cancel') {
      this.cancelOrder({ id: this.order.id })
      return
    }
    if (this.action === 'conclude') {
      this.concludeOrder({ id: this.order.id })
    }
  }
}
