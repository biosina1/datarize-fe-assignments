import { useNavigate } from 'react-router-dom'
import { Customer } from '../../../../types/customer'
import MostPurchasedCustomerItemView from './MostPurchasedCustomerItemView'

interface MostPurchasedCustomerItemProps {
  data: Customer
}

const MostPurchasedCustomerItem = ({ data }: MostPurchasedCustomerItemProps) => {
  const navigate = useNavigate()

  const handleItemClick = () => {
    navigate(`/customers/${data.id}/purchases`)
  }

  return <MostPurchasedCustomerItemView data={data} onItemClick={handleItemClick} />
}

export default MostPurchasedCustomerItem
