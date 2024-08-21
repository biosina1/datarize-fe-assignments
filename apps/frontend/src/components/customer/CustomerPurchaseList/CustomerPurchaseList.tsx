import { useParams } from 'react-router-dom'
import useFetchCustomerPurchaseList from '../../../queries/useFetchCustomerPurchaseList'
import CustomerPurchaseListView from './CustomerPurchaseListView'
import NoItem from '../../shared/NoItem'

// 고객 구매 목록
const CustomerPurchaseList = () => {
  const { customerId } = useParams()

  const { data } = useFetchCustomerPurchaseList(customerId ?? '')

  if (data && !data.length) return <NoItem>구매 목록이 존재하지 않습니다.</NoItem>

  return <CustomerPurchaseListView data={data} />
}

export default CustomerPurchaseList
