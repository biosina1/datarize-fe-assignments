import styles from './MostPurchasedCustomerItemView.module.scss'
import { Customer } from '../../../../types/customer'

interface MostPurchasedCustomerItemViewProps {
  data: Customer
  onItemClick: () => void
}

const MostPurchasedCustomerItemView = ({ data, onItemClick }: MostPurchasedCustomerItemViewProps) => {
  return (
    <li className={styles.mostPurchasedCustomerItem} onClick={onItemClick}>
      <p>아이디: {data.id}</p>
      <p>이름: {data.name}</p>
      <p>구매 수: {data.count}</p>
      <p>구매 가격: {data.totalAmount}</p>
    </li>
  )
}

export default MostPurchasedCustomerItemView
