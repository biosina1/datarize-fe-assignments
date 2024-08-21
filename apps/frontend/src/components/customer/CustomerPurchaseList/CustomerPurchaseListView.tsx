import styles from './CustomerPurchaseListView.module.scss'
import { CustomerPurchase } from '../../../types/customer'
import CustomerPurchaseItem from '../CustomerPurchaseItem'

interface CustomerPurchaseListViewProps {
  data: CustomerPurchase[]
}

const CustomerPurchaseListView = ({ data }: CustomerPurchaseListViewProps) => {
  return (
    <ul className={styles.customerPurchaseList}>
      {data.map((purchase) => (
        <CustomerPurchaseItem key={purchase.date} data={purchase} />
      ))}
    </ul>
  )
}

export default CustomerPurchaseListView
