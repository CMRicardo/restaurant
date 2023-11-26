import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';

import { LineData, createChart } from 'lightweight-charts';

import { SalesService } from '../../services/sales.service';
import { Sale } from '../../interfaces/sales-response.interface';

@Component({
  templateUrl: './sales-page.component.html',
})
export class SalesPageComponent implements AfterViewInit {
  private salesService = inject(SalesService)
  public sales: Sale[] = []
  @ViewChild('chart') chartContainer?: ElementRef<HTMLDivElement>;

  async ngAfterViewInit(): Promise<void> {
    this.sales = await this.salesService.getSales()
    if (!this.chartContainer) return

    const chart = createChart(
      this.chartContainer.nativeElement,
      { width: 400, height: 300, autoSize: true }
    )
    const series = chart.addLineSeries()
    const data = this.sales.map((sale): LineData =>  {
      const [date] = sale.date.split('T')
      return {
        time: date,
        value: Number(sale.total)
      }
    })    
    series.setData(data)
  }
}
