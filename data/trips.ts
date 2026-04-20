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

    peakMonths: [1, 2, 3, 10, 11, 12]
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

    peakMonths: [9, 10, 11, 12, 1, 2]
  },
  {
    id: 'T003',
    name: 'Morocco Desert Adventure',
    style: 'Comfort',
    destination: 'Morocco',
    theme: 'Explorer',

    grossRevenue: 140000,
    pax: 110,
    asp: 1270,
    discountPercent: 12,
    departures: 18,

    managedCapacity: false,
    promotional: false,
    newProduct: false,

    peakMonths: [3, 4, 5, 9, 10]
  },
  {
    id: 'T004',
    name: 'Sri Lanka Family Escape',
    style: 'Comfort',
    destination: 'Sri Lanka',
    theme: 'Family',

    grossRevenue: 195000,
    pax: 145,
    asp: 1345,
    discountPercent: 6,
    departures: 20,

    managedCapacity: true,
    promotional: false,
    newProduct: true,

    peakMonths: [12, 1, 2, 7, 8]
  },
  {
    id: 'T005',
    name: 'Peru Inca Trail',
    style: 'Premium',
    destination: 'Peru',
    theme: 'Walking & Trekking',

    grossRevenue: 310000,
    pax: 120,
    asp: 2580,
    discountPercent: 4,
    departures: 15,

    managedCapacity: true,
    promotional: true,
    newProduct: false,

    peakMonths: [5, 6, 7, 8, 9]
  },
  {
    id: 'T006',
    name: 'Thailand Island Hopper',
    style: 'Basix',
    destination: 'Thailand',
    theme: '18 to 35s',

    grossRevenue: 220000,
    pax: 260,
    asp: 845,
    discountPercent: 15,
    departures: 32,

    managedCapacity: true,
    promotional: false,
    newProduct: false,

    peakMonths: [11, 12, 1, 2, 3]
  },
  {
    id: 'T007',
    name: 'Kenya Wildlife Safari',
    style: 'Original',
    destination: 'Kenya',
    theme: 'Wildlife',

    grossRevenue: 275000,
    pax: 130,
    asp: 2115,
    discountPercent: 7,
    departures: 14,

    managedCapacity: true,
    promotional: false,
    newProduct: false,

    peakMonths: [6, 7, 8, 9]
  },
  {
    id: 'T008',
    name: 'Japan Cherry Blossom',
    style: 'Premium',
    destination: 'Japan',
    theme: 'Festivals',

    grossRevenue: 290000,
    pax: 105,
    asp: 2760,
    discountPercent: 3,
    departures: 10,

    managedCapacity: true,
    promotional: true,
    newProduct: false,

    peakMonths: [3, 4]
  },
  {
    id: 'T009',
    name: 'Italy Food Journey',
    style: 'Comfort',
    destination: 'Italy',
    theme: 'Food',

    grossRevenue: 205000,
    pax: 118,
    asp: 1735,
    discountPercent: 9,
    departures: 16,

    managedCapacity: false,
    promotional: false,
    newProduct: true,

    peakMonths: [4, 5, 6, 9, 10]
  },
  {
    id: 'T010',
    name: 'Patagonia Expedition',
    style: 'Original',
    destination: 'Patagonia',
    theme: 'Expeditions',

    grossRevenue: 330000,
    pax: 98,
    asp: 3365,
    discountPercent: 2,
    departures: 8,

    managedCapacity: true,
    promotional: true,
    newProduct: false,

    peakMonths: [11, 12, 1, 2]
  }
]