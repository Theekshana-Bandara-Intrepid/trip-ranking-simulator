import type { Trip } from "../types/trip";

export function calculateFinancialScore(trip: Trip) {
  const revenueScore = (trip.grossRevenue / 500000) * 100;
  const paxScore = (trip.pax / 300) * 100;
  const aspScore = (trip.asp / 3000) * 100;
  const discountScore = 100 - trip.discountPercent;
  const departureScore = (trip.departures / 50) * 100;

  return (
    revenueScore * 0.3 +
    paxScore * 0.25 +
    aspScore * 0.2 +
    discountScore * 0.15 +
    departureScore * 0.1
  );
}

// Calculate season score
export function calculateSeasonScore(trip: Trip) {
  const currentMonth = new Date().getMonth() + 1;
  return trip.peakMonths.includes(currentMonth) ? 100 : 40;
}

// Calculate diversity score
export function calculateDiversityScore(trip: Trip, shownStyles: string[]) {
  const count = shownStyles.filter((style) => style === trip.style).length;

  if (count === 0) return 100;
  if (count === 1) return 80;
  if (count === 2) return 60;
  return 40;
}
