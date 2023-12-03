import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  computed,
  inject,
  signal
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {
  IChartApi,
  createChart
} from 'lightweight-charts';

import { SalesService } from '../../services/sales.service';
import { Serie } from '../../interfaces/serie.interface';
import { chartOptions, mapData, seriesOptions } from './sales-page.utils';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  templateUrl: './sales-page.component.html',
})
export class SalesPageComponent implements AfterViewInit {
  private salesService = inject(SalesService)
  private titleService = inject(TitleService)
  private formBuilder = inject(FormBuilder)

  private chart?: IChartApi
  private serie?: Serie

  @ViewChild('chart')
  public chartContainer?: ElementRef<HTMLDivElement>;

  public sales = computed(() => this.salesService.sales().filter(sale => sale.status !== 'Reembolso'))
  public data = computed(() => mapData({ sales: this.sales() }))
  public isValidDateRange = signal(true)
  public datesExists = signal(true)
  public areSalesFiltered = signal(false)

  public myForm = this.formBuilder.group({
    initialDate: [, [Validators.required]],
    finalDate: [new Date().toLocaleDateString(), [Validators.required]]
  })

  ngOnInit(): void {
    this.titleService.title.set('Ventas')
  }

  get initialDate() {
    return this.myForm.get('initialDate')
  }
  get finalDate() {
    return this.myForm.get('finalDate')
  }

  async ngAfterViewInit(): Promise<void> {
    await this.salesService.getSales()

    if (!this.chartContainer) return
    this.chart = createChart(this.chartContainer.nativeElement)
    this.chart.applyOptions(chartOptions)
    this.serie = this.chart.addLineSeries()
    this.serie.applyOptions(seriesOptions)
    this.serie.setData(this.data())
  }

  public async filter(): Promise<void> {
    const initialDate = this.myForm.get('initialDate')?.value
    const finalDate = this.myForm.get('finalDate')?.value
    const datesExists = initialDate && finalDate
    this.datesExists.set( this.myForm.untouched && Boolean(this.initialDate?.errors && this.finalDate?.errors))
    
    if (!datesExists) return

    const firstDate = new Date(initialDate)
    const secondDate = new Date(finalDate)
    this.isValidDateRange.set(firstDate.getTime() < secondDate.getTime())
    if (!this.isValidDateRange()) return
    await this.salesService.getSales({ initialDate, finalDate })
    this.areSalesFiltered.set(true)
    this.serie?.setData(this.data())
  }

  public async removeFilter() {
    await this.salesService.getSales()
    this.serie?.setData(this.data())
    this.areSalesFiltered.set(false)
  }
}
