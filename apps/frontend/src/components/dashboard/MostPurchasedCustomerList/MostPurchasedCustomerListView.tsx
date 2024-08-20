import { PurchaseCustomer } from '../../../types/purchase'
import MostPurchasedCustomerItem from './MostPurchasedCustomerItem'

interface MostPurchasedCustomerListViewProps {
  data: PurchaseCustomer[]
}

const MostPurchasedCustomerListView = ({ data }: MostPurchasedCustomerListViewProps) => {
  return (
    <>
      <ul>
        {data?.map((customer) => (
          <MostPurchasedCustomerItem key={customer.id} data={customer} />
        ))}
      </ul>
    </>
  )
}

export default MostPurchasedCustomerListView
