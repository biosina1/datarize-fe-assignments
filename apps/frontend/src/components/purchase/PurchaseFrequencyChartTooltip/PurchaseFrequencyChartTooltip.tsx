import { TooltipProps } from 'recharts'
import PurchaseFrequencyChartTooltipView from './PurchaseFrequencyChartTooltipView'

// 가격대별 구매 빈도 차트 커스텀 툴팁
const PurchaseFrequencyChartTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const { color } = payload[0]
    const { count, range } = payload[0].payload

    return <PurchaseFrequencyChartTooltipView range={`${range}원`} count={`${count}개`} color={color} />
  }
  return null
}

export default PurchaseFrequencyChartTooltip
