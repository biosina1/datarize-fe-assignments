import { Navigate, Route, Routes } from 'react-router-dom'
import PurchaseDashboard from './pages/PurchaseDashboard'
import CustomerPurchaseDetail from './pages/CustomerPurchaseDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/purchase-dashboard" />} />
      <Route path="/purchase-dashboard" element={<PurchaseDashboard />} />
      <Route path="/customers/:customerId/purchases" element={<CustomerPurchaseDetail />} />
    </Routes>
  )
}

export default App
