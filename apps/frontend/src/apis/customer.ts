import axiosClient from '../clients/axios'
import { Customer, CustomerPurchase } from '../types/customer'

interface FetchCustomerListParams {
  sortBy: string
  name: string
}

// 가장 많이 구매한 고객 목록 API
export const fetchMostPurchasedCustomerList = ({ sortBy, name }: FetchCustomerListParams): Promise<Customer[]> => {
  return axiosClient
    .get(`/api/customers`, {
      params: {
        sortBy,
        name,
      },
    })
    .then((response) => response.data)
}

// 고객 구매 목록 조회 API
export const fetchCustomerPurchaseList = (customerId: string): Promise<CustomerPurchase[]> => {
  return axiosClient.get(`/api/customers/${customerId}/purchases`).then((response) => response.data)
}
