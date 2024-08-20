import { useEffect, useState } from 'react'
import DateRangePickerView from './DateRangePickerView'
import { convertToYYMMDD } from '../../../utils/dateUtil'

export type DateRange = { startDate: string; endDate: string }
export type OnDateChange = ({ startDate, endDate }: { startDate: string; endDate: string }) => void

interface DateRangePickerProps {
  defaultValue?: DateRange
  onDateChange: OnDateChange
}

const TODAY = convertToYYMMDD(new Date())

const DateRangePicker = ({ defaultValue, onDateChange }: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState(defaultValue?.startDate ?? TODAY)
  const [endDate, setEndDate] = useState(defaultValue?.endDate ?? TODAY)

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value
    setStartDate(newStartDate)
    if (newStartDate > endDate) setEndDate(newStartDate)
  }

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value
    setEndDate(newEndDate)
  }

  useEffect(() => {
    onDateChange?.({ startDate, endDate })
  }, [startDate, endDate])

  return (
    <DateRangePickerView
      startDate={startDate}
      endDate={endDate}
      handleStartDateChange={handleStartDateChange}
      handleEndDateChange={handleEndDateChange}
    />
  )
}

export default DateRangePicker
