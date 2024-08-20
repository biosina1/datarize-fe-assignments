import { useContext } from 'react'
import useFetchMostPurchasedCustomerList from '../../../queries/useFetchMostPurchasedCustomerList'
import MostPurchasedCustomerListView from './MostPurchasedCustomerListView'
import { CustomerSearchContext } from '../../../contexts/dashboard/CustomerSearchContext'
import Spinner from '../../shared/Spinner'
import ErrorFallback from '../../error/ErrorFallback'

const MostPurchasedCustomerList = () => {
  const { sortBy, name } = useContext(CustomerSearchContext)

  const { data, isLoading, error } = useFetchMostPurchasedCustomerList({
    sortBy,
    name,
  })

  if (isLoading) return <Spinner />

  if (error) return <ErrorFallback error={error} />

  return <MostPurchasedCustomerListView data={data ?? []} />
}

export default MostPurchasedCustomerList
