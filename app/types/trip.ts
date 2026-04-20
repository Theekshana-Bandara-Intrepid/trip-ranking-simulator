export interface Trip {
  id: string
  name: string
  style: string
  destination: string
  theme: string

  grossRevenue: number
  pax: number
  asp: number
  discountPercent: number
  departures: number

  managedCapacity: boolean
  promotional: boolean
  newProduct: boolean

  peakMonths: number[]
}