import styles from './DateRangePickerView.module.scss'

interface DateRangePickerViewProps {
  startDate: string
  endDate: string
  handleStartDateChange: React.ChangeEventHandler<HTMLInputElement>
  handleEndDateChange: React.ChangeEventHandler<HTMLInputElement>
}

const DateRangePickerView = ({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
}: DateRangePickerViewProps) => {
  return (
    <div className={styles.dateRangePicker}>
      <label>
        시작 일
        <input type="date" defaultValue={startDate} onChange={handleStartDateChange} />
      </label>
      <label>
        종료 일
        <input type="date" min={startDate} value={endDate} onChange={handleEndDateChange} />
      </label>
    </div>
  )
}

export default DateRangePickerView
