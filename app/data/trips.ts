import type { Trip } from '../types/trip'

export const trips: Trip[] = [
  {
    id: 'T001',
    name: 'Best of Vietnam',
    style: 'Original',
    destination: 'Vietnam',
    theme: 'Food',

    grossRevenue: 250000,
    pax: 180,
    asp: 1380,
    discountPercent: 8,
    departures: 24,

    managedCapacity: true,
    promotional: false,
    newProduct: false,

    peakMonths: [1,2,3,10,11,12]
  },
  {
    id: 'T002',
    name: 'Iceland Northern Lights',
    style: 'Premium',
    destination: 'Iceland',
    theme: 'Polar',

    grossRevenue: 180000,
    pax: 90,
    asp: 2200,
    discountPercent: 5,
    departures: 12,

    managedCapacity: true,
    promotional: true,
    newProduct: false,

    peakMonths: [9,10,11,12,1,2]
  }
]