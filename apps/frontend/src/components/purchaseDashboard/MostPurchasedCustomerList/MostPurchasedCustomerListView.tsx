import { Customer } from '../../../types/customer'
import MostPurchasedCustomerItem from './MostPurchasedCustomerItem'

interface MostPurchasedCustomerListViewProps {
  data: Customer[]
}

const MostPurchasedCustomerListView = ({ data }: MostPurchasedCustomerListViewProps) => {
  return (
    <ul>
      {data?.map((customer) => (
        <MostPurchasedCustomerItem key={customer.id} data={customer} />
      ))}
    </ul>
  )
}

export default MostPurchasedCustomerListView
