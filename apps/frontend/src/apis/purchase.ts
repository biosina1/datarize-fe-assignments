import axiosClient from '../clients/axios'
import { PurchaseFrequency } from '../types/purchase'

interface FetchPurchaseFrequencyParams {
  startDate: string
  endDate: string
}

// 가격대별 구매 빈도 API
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
