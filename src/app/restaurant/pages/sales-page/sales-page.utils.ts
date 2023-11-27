import { LineData } from 'lightweight-charts'

import { Sale } from '../../interfaces/sales-response.interface'

export const chartOptions = {
  autoSize: true,
  timeScale: {
    barSpacing: 80
  },
  layout: {
    fontFamily: 'Montserrat',
  },
  leftPriceScale: {
    visible: true
  },
  rightPriceScale: {
    visible: false
  }
}

export const seriesOptions = {
  color: '#4E123F'
}

interface mapDataProps {
  sales: Sale[]
}
export const mapData = ({ sales }: mapDataProps) => {
  return sales.map((sale): LineData => {
    const [date] = sale.date.split('T')
    return {
      time: date,
      value: Number(sale.total)
    }
  })
}