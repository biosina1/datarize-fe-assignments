import { Suspense } from 'react'
import { CustomerSearchProvider } from '../../contexts/dashboard/CustomerSearchContext'
import styles from './PurchaseDashboardView.module.scss'
import Spinner from '../../components/shared/Spinner'
import QueryErrorBoundary from '../../components/error/QueryErrorBoundary'
import CustomerSortSelect from '../../components/purchaseDashboard/CustomerSortSelect'
import CustomerNameSearchForm from '../../components/purchaseDashboard/CustomerNameSearchForm'
import PurchaseFrequencyChart from '../../components/purchaseDashboard/PurchaseFrequencyChart'
import MostPurchasedCustomerList from '../../components/purchaseDashboard/MostPurchasedCustomerList'

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
          <CustomerNameSearchForm />
          <CustomerSortSelect />
          <MostPurchasedCustomerList />
        </CustomerSearchProvider>
      </div>
    </div>
  )
}

export default PurchaseDashboardView
