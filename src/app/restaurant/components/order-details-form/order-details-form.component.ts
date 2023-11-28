import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sale } from '../../interfaces/sales-response.interface';
import { SalesService } from '../../services/sales.service';

interface CancelOrderProps {
  id: string
}

interface ConcludeOrderProps {
  id: string
  event: MouseEvent
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

  public closeForm() {
    this.onClose.emit(true)
  }

  public async cancelOrder({ id }: CancelOrderProps) {
    const confirmation = Boolean(prompt('¿Seguro que la quieres eliminar?'))
    if (!confirmation) return
    const body = {
      status: 'Reembolso'
    }
    await this.salesService.updateSale({ id, input: body })
    this.closeForm()
  }

  public async concludeOrder({ id, event }: ConcludeOrderProps) {
    event.preventDefault()
    const confirmation = Boolean(prompt('Seguro que la quieres concluir?'))
    if (!confirmation) return
    const body = {
      status: 'Concluida'
    }
    await this.salesService.updateSale({ id, input: body })
    this.closeForm()
  }
}
