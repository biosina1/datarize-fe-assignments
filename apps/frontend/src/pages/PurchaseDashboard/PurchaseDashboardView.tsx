import { Suspense } from 'react'
import { CustomerSearchProvider } from '../../contexts/dashboard/CustomerSearchContext'
import styles from './PurchaseDashboardView.module.scss'
import Spinner from '../../components/shared/Spinner'
import QueryErrorBoundary from '../../components/error/QueryErrorBoundary'
import PurchaseFrequencyChart from '../../components/purchase/PurchaseFrequencyChart'
import MostPurchasedCustomerNameSearchForm from '../../components/customer/MostPurchasedCustomerNameSearchForm'
import MostPurchasedCustomerSortSelect from '../../components/customer/MostPurchasedCustomerSortSelect'
import MostPurchasedCustomerList from '../../components/customer/MostPurchasedCustomerList'

const PurchaseDashboardView = () => {
  return (
    <div className={styles.purchaseDashboard}>
      <QueryErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <PurchaseFrequencyChart />
        </Suspense>
      </QueryErrorBoundary>

      <div className={styles.customerListWrapper}>
        <CustomerSearchProvider>
          <MostPurchasedCustomerNameSearchForm />
          <MostPurchasedCustomerSortSelect />
          <MostPurchasedCustomerList />
        </CustomerSearchProvider>
      </div>
    </div>
  )
}

export default PurchaseDashboardView
