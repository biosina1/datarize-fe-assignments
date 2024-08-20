import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Customer } from '../../types/customer'
import { fetchMostPurchasedCustomerList } from '../../apis/customer'

interface useFetchMostPurchasedCustomerListParams {
  sortBy: string
  name: string
}

const useFetchMostPurchasedCustomerList = ({ sortBy, name }: useFetchMostPurchasedCustomerListParams) =>
  useQuery<Customer[], AxiosError>({
    queryKey: ['mostPurchasedCustomerList', sortBy, name],
    queryFn: () => fetchMostPurchasedCustomerList({ sortBy, name }),
  })

export default useFetchMostPurchasedCustomerList
