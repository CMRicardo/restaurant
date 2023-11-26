import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  computed,
  inject,
  signal
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {
  IChartApi,
  LineData,
  createChart
} from 'lightweight-charts';

import { SalesService } from '../../services/sales.service';
import { Sale } from '../../interfaces/sales-response.interface';
import { Serie } from '../../interfaces/serie.interface';

@Component({
  templateUrl: './sales-page.component.html',
})
export class SalesPageComponent implements AfterViewInit {
  private salesService = inject(SalesService)
  private formBuilder = inject(FormBuilder)

  private chart?: IChartApi
  private serie?: Serie

  @ViewChild('chart')
  public chartContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('ErrorDateRange')
  public errorDateRange?: ElementRef<HTMLSpanElement>
  @ViewChild('ErrorNoDates')
  public errorNoDates?: ElementRef<HTMLSpanElement>

  public sales = signal<Sale[]>([])
  public data = computed(() => this.mapData())
  public isValidDateRange: boolean = true
  public showNoDatesError: boolean = false

  public myForm = this.formBuilder.group({
    initialDate: [],
    finalDate: [new Date().toLocaleDateString()]
  })

  get initialDate() {
    return this.myForm.get('initialDate')!.value
  }
  get finalDate() {
    return this.myForm.get('finalDate')!.value
  }

  async ngAfterViewInit(): Promise<void> {
    this.sales.set(await this.salesService.getSales())
    if (!this.chartContainer) return
    this.chart = createChart(
      this.chartContainer.nativeElement,
      { width: 400, height: 300, autoSize: true }
    )
    // With this we change the chart's scale
    this.chart.timeScale().applyOptions({ barSpacing: 48 })

    this.serie = this.chart.addLineSeries()
    this.serie.setData(this.data())
  }

  private mapData() {
    return this.sales().map((sale): LineData => {
      const [date] = sale.date.split('T')
      return {
        time: date,
        value: Number(sale.total)
      }
    })
  }

  public async filter(): Promise<void> {
    const initialDate = this.myForm.get('initialDate')?.value
    const finalDate = this.myForm.get('finalDate')?.value
    const datesExists = initialDate && finalDate
    this.showNoDatesError = Boolean(!datesExists)
    if (!datesExists) return

    const firstDate = new Date(initialDate)
    const secondDate = new Date(finalDate)
    this.isValidDateRange = firstDate.getTime() < secondDate.getTime()
    if (!this.isValidDateRange) return

    this.sales.set(await this.salesService.getSales({ initialDate, finalDate }))
    this.serie?.setData(this.data())
  }
}
