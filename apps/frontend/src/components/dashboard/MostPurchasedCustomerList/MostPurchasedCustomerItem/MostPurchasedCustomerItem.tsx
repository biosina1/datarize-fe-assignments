import { useNavigate } from 'react-router-dom'
import { PurchaseCustomer } from '../../../../types/purchase'
import MostPurchasedCustomerItemView from './MostPurchasedCustomerItemView'

interface MostPurchasedCustomerItemProps {
  data: PurchaseCustomer
}

const MostPurchasedCustomerItem = ({ data }: MostPurchasedCustomerItemProps) => {
  const navigate = useNavigate()

  const handleItemClick = () => {
    navigate(`/purchaseDetail/${data.id}`)
  }

  return <MostPurchasedCustomerItemView data={data} onItemClick={handleItemClick} />
}

export default MostPurchasedCustomerItem
