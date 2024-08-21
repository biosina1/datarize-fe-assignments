import { Suspense } from 'react'
import styles from './PurchaseDashboardView.module.scss'
import Spinner from '../../components/shared/Spinner'
import { CustomerSearchFilterProvider } from '../../contexts/CustomerSearchFilterContext'
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
        <CustomerSearchFilterProvider>
          <MostPurchasedCustomerNameSearchForm />
          <MostPurchasedCustomerSortSelect />
          <MostPurchasedCustomerList />
        </CustomerSearchFilterProvider>
      </div>
    </div>
  )
}

export default PurchaseDashboardView
