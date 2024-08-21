import { useContext } from 'react'
import { CustomerSearchContext, SortOrder } from '../../../contexts/dashboard/CustomerSearchContext'
import Select from '../../shared/Select'

const MostPurchasedCustomerSortSelect = () => {
  const { setSortBy } = useContext(CustomerSearchContext)

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOrder)
  }

  const options = [
    { id: SortOrder.ASC, name: '오름차순' },
    { id: SortOrder.DESC, name: '내림차순' },
  ]

  return <Select options={options} onChange={handleSortChange} />
}

export default MostPurchasedCustomerSortSelect
