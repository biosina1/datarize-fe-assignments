import { AxiosError } from 'axios'
import { CustomerPurchase } from '../../types/customer'
import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchCustomerPurchaseList } from '../../apis/customer'

const useFetchCustomerPurchaseList = (customerId?: string) =>
  useSuspenseQuery<CustomerPurchase[] | null, AxiosError>({
    queryKey: ['customerPurchaseList', customerId],
    queryFn: () => (customerId ? fetchCustomerPurchaseList(customerId) : null),
  })

export default useFetchCustomerPurchaseList
