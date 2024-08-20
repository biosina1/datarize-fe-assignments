import { Suspense } from 'react'
import styles from './CustomerPurchaseDetailView.module.scss'
import Spinner from '../../components/shared/Spinner'
import QueryErrorBoundary from '../../components/error/QueryErrorBoundary'
import CustomerPurchaseList from '../../components/customerPurchaseDetail/CustomerPurchaseList'

const CustomerPurchaseDetailView = () => {
  return (
    <div className={styles.customerPurchaseDetail}>
      <QueryErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <CustomerPurchaseList />
        </Suspense>
      </QueryErrorBoundary>
    </div>
  )
}

export default CustomerPurchaseDetailView
