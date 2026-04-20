import { trips } from '../data/trips'
import {
  calculateFinancialScore,
  calculateSeasonScore,
  calculateDiversityScore
} from '../utils/scoring'

export function useRanking() {
  const rankedTrips = []
  const shownStyles: string[] = []

  for (const trip of trips) {
    const financial = calculateFinancialScore(trip)
    const season = calculateSeasonScore(trip)
    const diversity = calculateDiversityScore(trip, shownStyles)

    const finalScore =
      financial * 0.7 +
      season * 0.15 +
      diversity * 0.15

    rankedTrips.push({
      ...trip,
      financial,
      season,
      diversity,
      finalScore
    })

    shownStyles.push(trip.style)
  }

  return rankedTrips.sort((a, b) => b.finalScore - a.finalScore)
}