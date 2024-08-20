import { Suspense } from 'react'
import Spinner from '../../components/shared/Spinner'
import QueryErrorBoundary from '../../components/error/QueryErrorBoundary'
import PurchaseFrequencyChart from '../../components/dashboard/PurchaseFrequencyChart'
import MostPurchasedCustomerList from '../../components/dashboard/MostPurchasedCustomerList'
import { CustomerSearchProvider } from '../../contexts/dashboard/CustomerSearchContext'
import CustomerNameSearchForm from '../../components/dashboard/MostPurchasedCustomerList/CustomerNameSearchForm'
import CustomerSortSelect from '../../components/dashboard/MostPurchasedCustomerList/CustomerSortSelect'

const Dashboard = () => {
  return (
    <div>
      <QueryErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <PurchaseFrequencyChart />
        </Suspense>
      </QueryErrorBoundary>

      <CustomerSearchProvider>
        <CustomerNameSearchForm />
        <CustomerSortSelect />
        <MostPurchasedCustomerList />
      </CustomerSearchProvider>
    </div>
  )
}

export default Dashboard
