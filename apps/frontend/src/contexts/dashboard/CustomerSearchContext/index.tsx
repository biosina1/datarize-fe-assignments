import { createContext, useState } from 'react'

export enum SortOrder {
  'ASC' = 'asc',
  'DESC' = 'desc',
}

interface CustomerSearchContextValue {
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

export const CustomerSearchContext = createContext<CustomerSearchContextValue>(initialState)

interface CustomerSearchProviderProps {
  children: React.ReactNode
}

export const CustomerSearchProvider = ({ children }: CustomerSearchProviderProps) => {
  const [sortBy, setSortBy] = useState(initialState.sortBy)
  const [name, setName] = useState(initialState.name)

  return (
    <CustomerSearchContext.Provider
      value={{
        sortBy,
        name,
        setSortBy,
        setName,
      }}
    >
      {children}
    </CustomerSearchContext.Provider>
  )
}
