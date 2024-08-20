import axiosClient from '../clients/axios'
import { PurchaseFrequency } from '../types/purchase'

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
