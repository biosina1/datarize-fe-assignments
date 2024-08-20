import { useParams } from 'react-router-dom'
import useFetchCustomerPurchaseList from '../../../queries/useFetchCustomerPurchaseList'
import CustomerPurchaseListView from './CustomerPurchaseListView'

const CustomerPurchaseList = () => {
  const { customerId } = useParams()

  const { data } = useFetchCustomerPurchaseList(customerId)

  return <CustomerPurchaseListView data={data ?? []} />
}

export default CustomerPurchaseList
