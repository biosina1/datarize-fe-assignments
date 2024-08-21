import { Navigate, Route, Routes } from 'react-router-dom'
import PurchaseDashboard from './pages/PurchaseDashboard'
import CustomerPurchaseDetail from './pages/CustomerPurchaseDetail'
import NotFound from './pages/NotFound'
import Layout from './components/layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/purchase-dashboard" />} />
        <Route path="/purchase-dashboard" element={<PurchaseDashboard />} />
        <Route path="/customers/:customerId/purchases" element={<CustomerPurchaseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
