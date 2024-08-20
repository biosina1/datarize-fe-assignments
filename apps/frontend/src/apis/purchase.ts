import axiosClient from '../clients/axios'
import { PurchaseCustomer, PurchaseFrequency } from '../types/purchase'

interface FetchPurchaseFrequencyParams {
  startDate: string
  endDate: string
}

export const fetchPurchaseFrequency = ({
  startDate,
  endDate,
}: FetchPurchaseFrequencyParams): Promise<PurchaseFrequency[]> => {
  return axiosClient
    .get(`/api/purchase-frequency`, {
      params: {
        from: startDate,
        to: endDate,
      },
    })
    .then((response) => response.data)
}

interface FetchMostPurchasedCustomerListParams {
  sortBy: string
  name: string
}

export const fetchMostPurchasedCustomerList = ({
  sortBy,
  name,
}: FetchMostPurchasedCustomerListParams): Promise<PurchaseCustomer[]> => {
  return axiosClient
    .get(`/api/customers`, {
      params: {
        sortBy,
        name,
      },
    })
    .then((response) => response.data)
}
