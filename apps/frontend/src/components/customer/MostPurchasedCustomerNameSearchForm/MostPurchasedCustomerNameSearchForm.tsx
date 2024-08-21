import { useContext, useState } from 'react'
import { CustomerSearchContext } from '../../../contexts/dashboard/CustomerSearchContext'
import MostPurchasedCustomerNameSearchFormView from './MostPurchasedCustomerNameSearchFormView'

const MostPurchasedCustomerNameSearchForm = () => {
  const { setName: setNameFilter } = useContext(CustomerSearchContext)

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
