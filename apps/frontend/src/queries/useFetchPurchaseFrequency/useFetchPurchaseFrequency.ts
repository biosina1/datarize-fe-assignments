import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPurchaseFrequency } from '../../apis/purchase'

interface UseFetchPurchaseFrequencyParams {
  startDate: string
  endDate: string
}

const useFetchPurchaseFrequency = ({ startDate, endDate }: UseFetchPurchaseFrequencyParams) =>
  useSuspenseQuery({
    queryKey: ['purchaseFrequency', startDate, endDate],
    queryFn: () => fetchPurchaseFrequency({ startDate, endDate }),
  })

export default useFetchPurchaseFrequency
