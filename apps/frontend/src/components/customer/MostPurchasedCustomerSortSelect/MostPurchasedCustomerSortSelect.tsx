import { useContext } from 'react'
import Select from '../../shared/Select'
import { CustomerSearchFilterContext, SortOrder } from '../../../contexts/CustomerSearchFilterContext'

const MostPurchasedCustomerSortSelect = () => {
  const { setSortBy } = useContext(CustomerSearchFilterContext)

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
