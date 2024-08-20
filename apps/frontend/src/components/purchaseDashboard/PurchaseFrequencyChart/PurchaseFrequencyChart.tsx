import { useState } from 'react'
import PurchaseFrequencyChartView from './PurchaseFrequencyChartView'
import useFetchPurchaseFrequency from '../../../queries/useFetchPurchaseFrequency'
import { DateRange } from '../../shared/DateRangePicker'

const DEFAULT_DATE_RANGE = {
  startDate: '2024-07-01',
  endDate: '2024-07-31',
}

const PurchaseFrequencyChart = () => {
  const [dateRange, setDateRange] = useState(DEFAULT_DATE_RANGE)

  const { data } = useFetchPurchaseFrequency(dateRange)

  const handleDateChange = (dateRange: DateRange) => {
    setDateRange(dateRange)
  }

  return (
    <PurchaseFrequencyChartView data={data} defaultDateRange={DEFAULT_DATE_RANGE} onDateChange={handleDateChange} />
  )
}

export default PurchaseFrequencyChart
