import styles from './MostPurchasedCustomerItemView.module.scss'
import { Customer } from '../../../types/customer'

interface MostPurchasedCustomerItemViewProps {
  data: Omit<Customer, 'count' | 'totalAmount'> & {
    count: string
    totalAmount: string
  }
  onItemClick: () => void
}

const MostPurchasedCustomerItemView = ({
  data: { id, name, count, totalAmount },
  onItemClick,
}: MostPurchasedCustomerItemViewProps) => {
  return (
    <li className={styles.mostPurchasedCustomerItem} onClick={onItemClick}>
      <p>아이디: {id}</p>
      <p>이름: {name}</p>
      <p>총 구매 수량: {count}</p>
      <p>총 구매 가격: {totalAmount}</p>
    </li>
  )
}

export default MostPurchasedCustomerItemView
