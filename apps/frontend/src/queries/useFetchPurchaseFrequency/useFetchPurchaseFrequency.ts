import { useQuery } from '@tanstack/react-query'
import { fetchPurchaseFrequency } from '../../apis/purchase'

interface UseFetchPurchaseFrequencyParams {
  startDate: string
  endDate: string
}

const useFetchPurchaseFrequency = ({ startDate, endDate }: UseFetchPurchaseFrequencyParams) =>
  useQuery({
    queryKey: ['purchaseFrequency', startDate, endDate],
    queryFn: () => fetchPurchaseFrequency({ startDate, endDate }),
  })

export default useFetchPurchaseFrequency
