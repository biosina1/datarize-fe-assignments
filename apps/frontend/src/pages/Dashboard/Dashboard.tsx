import { Suspense } from 'react'
import PurchaseFrequencyChart from '../../components/dashboard/PurchaseFrequencyChart'
import Spinner from '../../components/shared/Spinner'

const Dashboard = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PurchaseFrequencyChart />
      </Suspense>
    </div>
  )
}

export default Dashboard
