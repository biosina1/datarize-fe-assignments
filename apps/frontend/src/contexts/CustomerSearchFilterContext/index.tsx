import { createContext, useState } from 'react'

export enum SortOrder {
  'ASC' = 'asc',
  'DESC' = 'desc',
}

interface CustomerSearchFilterContextValue {
  sortBy: SortOrder
  name: string
  setSortBy: React.Dispatch<React.SetStateAction<SortOrder>>
  setName: React.Dispatch<React.SetStateAction<string>>
}

const initialState = {
  sortBy: SortOrder.ASC,
  name: '',
  setSortBy: () => {},
  setName: () => {},
}

export const CustomerSearchFilterContext = createContext<CustomerSearchFilterContextValue>(initialState)

interface CustomerSearchProviderProps {
  children: React.ReactNode
}

export const CustomerSearchFilterProvider = ({ children }: CustomerSearchProviderProps) => {
  const [sortBy, setSortBy] = useState(initialState.sortBy)
  const [name, setName] = useState(initialState.name)

  return (
    <CustomerSearchFilterContext.Provider
      value={{
        sortBy,
        name,
        setSortBy,
        setName,
      }}
    >
      {children}
    </CustomerSearchFilterContext.Provider>
  )
}
