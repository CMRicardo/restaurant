import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { Sale } from '../../interfaces/sales-response.interface';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  templateUrl: './orders-page.component.html',
  styles: [
  ]
})
export class OrdersPageComponent implements OnInit {
  private salesService = inject(SalesService)
  private titleService = inject(TitleService)

  public isDetailsFormOpen = false
  public showDetailsForm = false
  public viewDetailsBtn?: HTMLButtonElement
  public sales = computed(() => this.salesService.sales())
  public orders = computed(() => this.sales().filter(sale => sale.status === 'Pendiente'))
  public selectedOrder = signal<Sale>(this.orders()[0])

  async ngOnInit(): Promise<void> {
    this.titleService.title.set('Pedidos pendientes')
    if (this.salesService.sales().length !== 0) return
    this.salesService.getSales()
  }

  closeDetails() {
    this.viewDetailsBtn!.disabled = false
    this.showDetailsForm = false
    this.isDetailsFormOpen = false
  }

  openDetails(btn: HTMLButtonElement, order: Sale) {
    if (this.isDetailsFormOpen) return
    this.isDetailsFormOpen = true
    this.selectedOrder.set(order)
    this.viewDetailsBtn = btn
    this.viewDetailsBtn.disabled = true
    this.showDetailsForm = true
  }
}
