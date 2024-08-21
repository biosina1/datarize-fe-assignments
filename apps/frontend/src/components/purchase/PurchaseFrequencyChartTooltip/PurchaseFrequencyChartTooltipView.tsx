import styles from './PurchaseFrequencyChartTooltipView.module.scss'

interface PurchaseFrequencyChartTooltipViewProps {
  range: string
  count: string
  color?: string
}

const PurchaseFrequencyChartTooltipView = ({ range, count, color }: PurchaseFrequencyChartTooltipViewProps) => {
  return (
    <div className={styles.purchaseFrequencyChartTooltip}>
      <p>{range}</p>
      <p style={{ color }}>{count}</p>
    </div>
  )
}

export default PurchaseFrequencyChartTooltipView
