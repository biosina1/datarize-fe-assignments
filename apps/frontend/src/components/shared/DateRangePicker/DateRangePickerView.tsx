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
    <>
      <label>
        시작 날짜:
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </label>

      <label>
        종료 날짜:
        <input type="date" min={startDate} value={endDate} onChange={handleEndDateChange} />
      </label>
    </>
  )
}

export default DateRangePickerView
