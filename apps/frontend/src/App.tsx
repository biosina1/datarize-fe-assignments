import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PurchaseDetail from './pages/PurchaseDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/purchaseDetail/:customerId" element={<PurchaseDetail />} />
    </Routes>
  )
}

export default App
