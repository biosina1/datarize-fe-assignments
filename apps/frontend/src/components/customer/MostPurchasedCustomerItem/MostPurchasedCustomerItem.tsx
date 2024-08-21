import { useNavigate } from 'react-router-dom'
import { Customer } from '../../../types/customer'
import MostPurchasedCustomerItemView from './MostPurchasedCustomerItemView'

interface MostPurchasedCustomerItemProps {
  data: Customer
}

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
