import { Suspense } from 'react'
import Spinner from '../../components/shared/Spinner'
import QueryErrorBoundary from '../../components/error/QueryErrorBoundary'
import PurchaseFrequencyChart from '../../components/dashboard/PurchaseFrequencyChart'

const Dashboard = () => {
  return (
    <div>
      <QueryErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <PurchaseFrequencyChart />
        </Suspense>
      </QueryErrorBoundary>
    </div>
  )
}

export default Dashboard
