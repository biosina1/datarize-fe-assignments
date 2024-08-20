import { Customer } from '../../../../types/customer'

interface MostPurchasedCustomerItemViewProps {
  data: Customer
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
