import axiosClient from '../clients/axios'
import { Customer, CustomerPurchase } from '../types/customer'

interface FetchCustomerListParams {
  sortBy: string
  name: string
}

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

export const fetchCustomerPurchaseList = (customerId: string): Promise<CustomerPurchase[]> => {
  return axiosClient.get(`/api/customers/${customerId}/purchases`).then((response) => response.data)
}
