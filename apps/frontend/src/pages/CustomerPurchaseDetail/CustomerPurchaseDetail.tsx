import { Suspense } from 'react'
import Spinner from '../../components/shared/Spinner'
import QueryErrorBoundary from '../../components/error/QueryErrorBoundary'
import CustomerPurchaseList from '../../components/customerPurchaseDetail/CustomerPurchaseList'

const CustomerPurchaseDetail = () => {
  return (
    <QueryErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <CustomerPurchaseList />
      </Suspense>
    </QueryErrorBoundary>
  )
}

export default CustomerPurchaseDetail
