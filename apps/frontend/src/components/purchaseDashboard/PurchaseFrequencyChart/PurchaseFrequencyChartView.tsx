import styles from './PurchaseFrequencyChartView.module.scss'
import { PurchaseFrequency } from '../../../types/purchase'
import { Formatter } from 'recharts/types/component/DefaultLegendContent'
import { Bar, BarChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import DateRangePicker, { DateRange, OnDateChange } from '../../shared/DateRangePicker'
import PurchaseFrequencyTooltip from './PurchaseFrequencyTooltip'

interface PurchaseFrequencyChartViewProps {
  data?: PurchaseFrequency[]
  onDateChange: OnDateChange
  defaultDateRange: DateRange
  legendFormatter: Formatter
}

const PurchaseFrequencyChartView = ({
  data,
  defaultDateRange,
  legendFormatter,
  onDateChange,
}: PurchaseFrequencyChartViewProps) => {
  return (
    <div className={styles.purchaseFrequencyChart}>
      <DateRangePicker defaultValue={defaultDateRange} onDateChange={onDateChange} />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            right: 50,
            top: 30,
            bottom: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" fontSize={12} angle={-30} textAnchor="end">
            <Label value="(원)" position="insideBottomRight" dx={10} fontSize={12} />
          </XAxis>
          <YAxis fontSize={12} />
          <Tooltip content={<PurchaseFrequencyTooltip />} />
          <Legend wrapperStyle={{ paddingBottom: 10 }} formatter={legendFormatter} verticalAlign="top" align="right" />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PurchaseFrequencyChartView
