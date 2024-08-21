import { useNavigate } from 'react-router-dom'
import { Customer } from '../../../types/customer'
import MostPurchasedCustomerItemView from './MostPurchasedCustomerItemView'

interface MostPurchasedCustomerItemProps {
  data: Customer
}

// 가장 많이 구매한 고객 목록 아이템
const MostPurchasedCustomerItem = ({ data }: MostPurchasedCustomerItemProps) => {
  const navigate = useNavigate()

  const handleItemClick = () => {
    navigate(`/customers/${data.id}/purchases`)
  }

  const formattedData = {
    ...data,
    count: `${data.count.toLocaleString()}개`,
    totalAmount: `${data.totalAmount.toLocaleString()}원`,
  }

  return <MostPurchasedCustomerItemView data={formattedData} onItemClick={handleItemClick} />
}

export default MostPurchasedCustomerItem
