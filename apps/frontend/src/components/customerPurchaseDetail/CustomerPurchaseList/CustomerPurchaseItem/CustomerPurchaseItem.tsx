import { CustomerPurchase } from '../../../../types/customer'
import CustomerPurchaseItemView from './CustomerPurchaseItemView'

interface CustomerPurchaseItemViewProps {
  data: CustomerPurchase
}

const CustomerPurchaseItem = ({ data }: CustomerPurchaseItemViewProps) => {
  const formattedData = {
    ...data,
    price: `${data.price.toLocaleString()}원`,
    quantity: `${data.quantity.toLocaleString()}개`,
  }

  return <CustomerPurchaseItemView data={formattedData} />
}

export default CustomerPurchaseItem
