import { Suspense } from 'react'
import { CustomerSearchProvider } from '../../contexts/dashboard/CustomerSearchContext'
import Spinner from '../../components/shared/Spinner'
import QueryErrorBoundary from '../../components/error/QueryErrorBoundary'
import PurchaseFrequencyChart from '../../components/purchaseDashboard/PurchaseFrequencyChart'
import MostPurchasedCustomerList from '../../components/purchaseDashboard/MostPurchasedCustomerList'
import CustomerSortSelect from '../../components/purchaseDashboard/MostPurchasedCustomerList/CustomerSortSelect'
import CustomerNameSearchForm from '../../components/purchaseDashboard/MostPurchasedCustomerList/CustomerNameSearchForm'

const PurchaseDashboard = () => {
  return (
    <>
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
    </>
  )
}

export default PurchaseDashboard
