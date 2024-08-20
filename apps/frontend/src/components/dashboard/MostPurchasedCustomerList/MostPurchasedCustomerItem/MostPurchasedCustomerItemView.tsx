import { PurchaseCustomer } from '../../../../types/purchase'

interface MostPurchasedCustomerItemViewProps {
  data: PurchaseCustomer
  onItemClick: () => void
}

const MostPurchasedCustomerItemView = ({ data, onItemClick }: MostPurchasedCustomerItemViewProps) => {
  return (
    <li onClick={onItemClick}>
      <p>id: {data.id}</p>
      <p>name: {data.name}</p>
      <p>count: {data.count}</p>
      <p>totalAmount: {data.totalAmount}</p>
    </li>
  )
}

export default MostPurchasedCustomerItemView
