import { CustomerPurchase } from '../../../../types/customer'
import styles from './CustomerPurchaseItemView.module.scss'

interface CustomerPurchaseItemViewProps {
  data: CustomerPurchase
}

const CustomerPurchaseItemView = ({ data }: CustomerPurchaseItemViewProps) => {
  return (
    <li className={styles.customerPurchaseItem}>
      <img src={data.imgSrc} alt={data.product} />
      <div className={styles.infos}>
        <p className={styles.date}>{data.date} 주문</p>
        <p className={styles.product}>{data.product}</p>
        <p className={styles.price}>
          {data.price}원 <span className={styles.quantity}>{data.quantity}개</span>
        </p>
      </div>
    </li>
  )
}

export default CustomerPurchaseItemView
