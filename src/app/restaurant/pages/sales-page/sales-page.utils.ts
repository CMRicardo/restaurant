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

  const salesByDate: { [date: string]: Sale[] }  = sales.reduce((accumulator, sale) => {
    const [date] = sale.date.split('T')

    if (accumulator[date]) {
      accumulator[date].push(sale)
    } else {
      accumulator[date] = [sale]
    }
    return accumulator
  }, {} as { [date: string]: Sale[] })

  const resultArray: { time: string; value: number }[] = Object.entries(salesByDate).map(
    ([time, salesForDate]) => ({
      time,
      value: salesForDate.reduce((total, sale) => total + parseFloat(sale.total), 0),
    })
  );
  console.log({resultArray});
  
  
  return resultArray
}