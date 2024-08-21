import styles from './PurchaseFrequencyTooltipView.module.scss'

interface PurchaseFrequencyTooltipViewProps {
  range: string
  count: string
  color?: string
}

const PurchaseFrequencyTooltipView = ({ range, count, color }: PurchaseFrequencyTooltipViewProps) => {
  return (
    <div className={styles.tooltip}>
      <p>{range}</p>
      <p style={{ color }}>{count}</p>
    </div>
  )
}

export default PurchaseFrequencyTooltipView
