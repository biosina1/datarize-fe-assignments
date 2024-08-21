import { useContext, useState } from 'react'
import { CustomerSearchFilterContext } from '../../../contexts/CustomerSearchFilterContext'
import MostPurchasedCustomerNameSearchFormView from './MostPurchasedCustomerNameSearchFormView'

// 가장 많이 구매한 고객 목록 - 이름 검색 폼
const MostPurchasedCustomerNameSearchForm = () => {
  const { setName: setNameFilter } = useContext(CustomerSearchFilterContext)

  const [name, setName] = useState('')

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNameFilter(name)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <MostPurchasedCustomerNameSearchFormView
      name={name}
      onInputChange={handleInputChange}
      onFormSubmit={handleFormSubmit}
    />
  )
}

export default MostPurchasedCustomerNameSearchForm
