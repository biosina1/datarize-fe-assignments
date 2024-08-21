import { AxiosError } from 'axios'
import { CustomerPurchase } from '../../types/customer'
import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchCustomerPurchaseList } from '../../apis/customer'

const useFetchCustomerPurchaseList = (customerId: string) =>
  useSuspenseQuery<CustomerPurchase[], AxiosError>({
    queryKey: ['customerPurchaseList', customerId],
    queryFn: () => fetchCustomerPurchaseList(customerId),
  })

export default useFetchCustomerPurchaseList
