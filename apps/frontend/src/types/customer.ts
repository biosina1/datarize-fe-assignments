export interface Customer {
  id: number
  name: string
  count: number
  totalAmount: string
}

export interface CustomerPurchase {
  date: string
  imgSrc: string
  price: number
  product: string
  quantity: number
}
