import { Component, OnInit, inject } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { Sale } from '../../interfaces/sales-response.interface';

@Component({
  templateUrl: './sales-page.component.html',
})
export class SalesPageComponent implements OnInit{
  private salesService = inject(SalesService)
  public sales: Sale[] = []

  async ngOnInit(): Promise<void> {
    this.sales = await this.salesService.getSales()
  }
}
