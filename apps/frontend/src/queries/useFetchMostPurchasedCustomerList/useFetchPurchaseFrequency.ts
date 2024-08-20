import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchMostPurchasedCustomerList } from '../../apis/purchase'

interface useFetchMostPurchasedCustomerListParams {
  sortBy: string
  name: string
}

const useFetchMostPurchasedCustomerList = ({ sortBy, name }: useFetchMostPurchasedCustomerListParams) =>
  useSuspenseQuery({
    queryKey: ['mostPurchasedCustomerList', sortBy, name],
    queryFn: () => fetchMostPurchasedCustomerList({ sortBy, name }),
  })

export default useFetchMostPurchasedCustomerList
