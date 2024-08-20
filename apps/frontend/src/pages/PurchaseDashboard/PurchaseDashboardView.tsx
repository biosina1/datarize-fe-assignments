import { Suspense } from 'react'
import styles from './PurchaseDashboardView.module.scss'
import { CustomerSearchProvider } from '../../contexts/dashboard/CustomerSearchContext'
import Spinner from '../../components/shared/Spinner'
import QueryErrorBoundary from '../../components/error/QueryErrorBoundary'
import PurchaseFrequencyChart from '../../components/purchaseDashboard/PurchaseFrequencyChart'
import MostPurchasedCustomerList from '../../components/purchaseDashboard/MostPurchasedCustomerList'
import CustomerSortSelect from '../../components/purchaseDashboard/MostPurchasedCustomerList/CustomerSortSelect'
import CustomerNameSearchForm from '../../components/purchaseDashboard/MostPurchasedCustomerList/CustomerNameSearchForm'

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
