import { useState } from 'react'
import { DateRange } from '../../shared/DateRangePicker'
import { Formatter } from 'recharts/types/component/DefaultLegendContent'
import PurchaseFrequencyChartView from './PurchaseFrequencyChartView'
import useFetchPurchaseFrequency from '../../../queries/useFetchPurchaseFrequency'

const DEFAULT_DATE_RANGE = {
  startDate: '2024-07-01',
  endDate: '2024-07-31',
}

// 가격대별 구매 빈도 차트
const PurchaseFrequencyChart = () => {
  const [dateRange, setDateRange] = useState(DEFAULT_DATE_RANGE)

  const { data } = useFetchPurchaseFrequency(dateRange)

  const handleDateChange = (dateRange: DateRange) => {
    setDateRange(dateRange)
  }

  // 차트 Legend 포맷터, 영문을 한글로 변환
  const legendFormatter: Formatter = (value) => {
    return value === 'count' ? '구매 수량' : value
  }

  return (
    <PurchaseFrequencyChartView
      data={data}
      defaultDateRange={DEFAULT_DATE_RANGE}
      onDateChange={handleDateChange}
      legendFormatter={legendFormatter}
    />
  )
}

export default PurchaseFrequencyChart
