import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { fetchMostPurchasedCustomerList } from '../../apis/purchase'
import { PurchaseCustomer } from '../../types/purchase'

interface useFetchMostPurchasedCustomerListParams {
  sortBy: string
  name: string
}

const useFetchMostPurchasedCustomerList = ({ sortBy, name }: useFetchMostPurchasedCustomerListParams) =>
  useQuery<PurchaseCustomer[], AxiosError>({
    queryKey: ['mostPurchasedCustomerList', sortBy, name],
    queryFn: () => fetchMostPurchasedCustomerList({ sortBy, name }),
  })

export default useFetchMostPurchasedCustomerList
