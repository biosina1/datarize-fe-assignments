import { CustomerPurchase } from '../../../../types/customer'
import Image from '../../../shared/Image'
import styles from './CustomerPurchaseItemView.module.scss'

interface CustomerPurchaseItemViewProps {
  data: Omit<CustomerPurchase, 'price' | 'quantity'> & {
    price: string
    quantity: string
  }
}

const CustomerPurchaseItemView = ({
  data: { date, product, imgSrc, price, quantity },
}: CustomerPurchaseItemViewProps) => {
  return (
    <li className={styles.customerPurchaseItem}>
      <Image className={styles.thumbnail} src={imgSrc} alt={product} />
      <div className={styles.infoWrapper}>
        <p className={styles.date}>{date}</p>
        <p className={styles.product}>{product}</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.quantity}>{quantity}</p>
      </div>
    </li>
  )
}

export default CustomerPurchaseItemView
