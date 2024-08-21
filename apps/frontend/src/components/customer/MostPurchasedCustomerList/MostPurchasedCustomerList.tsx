import { useContext } from 'react'
import useFetchMostPurchasedCustomerList from '../../../queries/useFetchMostPurchasedCustomerList'
import MostPurchasedCustomerListView from './MostPurchasedCustomerListView'
import { CustomerSearchFilterContext } from '../../../contexts/CustomerSearchFilterContext'
import Spinner from '../../shared/Spinner'
import ErrorFallback from '../../error/ErrorFallback'

// 가장 많이 구매한 고객 목록
const MostPurchasedCustomerList = () => {
  const { sortBy, name } = useContext(CustomerSearchFilterContext)

  const { data, isLoading, error } = useFetchMostPurchasedCustomerList({
    sortBy,
    name,
  })

  if (isLoading) return <Spinner />

  if (error) return <ErrorFallback error={error} />

  return <MostPurchasedCustomerListView data={data} />
}

export default MostPurchasedCustomerList
