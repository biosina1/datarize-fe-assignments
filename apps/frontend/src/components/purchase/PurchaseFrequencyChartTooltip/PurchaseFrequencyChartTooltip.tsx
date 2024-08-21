import { TooltipProps } from 'recharts'
import PurchaseFrequencyChartTooltipView from './PurchaseFrequencyChartTooltipView'

const PurchaseFrequencyChartTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const { color } = payload[0]
    const { count, range } = payload[0].payload

    return <PurchaseFrequencyChartTooltipView range={`${range} 원`} count={`${count} 개`} color={color} />
  }
  return null
}

export default PurchaseFrequencyChartTooltip
