import { TooltipProps } from 'recharts'
import PurchaseFrequencyTooltipView from './PurchaseFrequencyTooltipView'

const PurchaseFrequencyTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const { color } = payload[0]
    const { count, range } = payload[0].payload

    return <PurchaseFrequencyTooltipView range={`${range} 원`} count={`${count} 개`} color={color} />
  }
  return null
}

export default PurchaseFrequencyTooltip
