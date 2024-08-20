import { useSuspenseQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { PurchaseFrequency } from '../../types/purchase'
import { fetchPurchaseFrequency } from '../../apis/purchase'

interface UseFetchPurchaseFrequencyParams {
  startDate: string
  endDate: string
}

const useFetchPurchaseFrequency = ({ startDate, endDate }: UseFetchPurchaseFrequencyParams) =>
  useSuspenseQuery<PurchaseFrequency[], AxiosError>({
    queryKey: ['purchaseFrequency', startDate, endDate],
    queryFn: () => fetchPurchaseFrequency({ startDate, endDate }),
  })

export default useFetchPurchaseFrequency
