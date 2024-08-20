import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { PurchaseFrequency } from '../../../types/purchase'
import DateRangePicker, { DateRange, OnDateChange } from '../../shared/DateRangePicker'

interface PurchaseFrequencyChartViewProps {
  data?: PurchaseFrequency[]
  onDateChange: OnDateChange
  defaultDateRange: DateRange
}

const PurchaseFrequencyChartView = ({ data, defaultDateRange, onDateChange }: PurchaseFrequencyChartViewProps) => {
  return (
    <>
      <DateRangePicker defaultValue={defaultDateRange} onDateChange={onDateChange} />
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} height={400}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default PurchaseFrequencyChartView
