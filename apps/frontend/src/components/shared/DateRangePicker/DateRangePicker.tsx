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

// 날짜 범위 선택
const DateRangePicker = ({ defaultValue, onDateChange }: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState(defaultValue?.startDate ?? TODAY)
  const [endDate, setEndDate] = useState(defaultValue?.endDate ?? TODAY)

  // 시작 날짜 선택
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value
    setStartDate(newStartDate)

    // 시작 날짜가 종료 날짜보다 크면, 종료 날짜 변환
    if (newStartDate > endDate) setEndDate(newStartDate)
  }

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value
    setEndDate(newEndDate)
  }

  // 시작 또는 종료 날짜가 변경되면 onDateChange 호출
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
