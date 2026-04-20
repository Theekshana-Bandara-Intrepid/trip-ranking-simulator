<script setup lang="ts">
import { useRanking } from '../composables/useRanking'

const trips = useRanking()
</script>

<template>
  <div style="padding: 20px;">
    <h1>Trip Ranking Simulator</h1>

    <table border="1" cellpadding="8">
      <tr>
        <th>Rank</th>
        <th>Trip</th>
        <th>Style</th>
        <th>Financial</th>
        <th>Season</th>
        <th>Diversity</th>
        <th>Final</th>
      </tr>

      <tr v-for="(trip, index) in trips" :key="trip.id">
        <td>{{ index + 1 }}</td>
        <td>{{ trip.name }}</td>
        <td>{{ trip.style }}</td>
        <td>{{ trip.financial.toFixed(1) }}</td>
        <td>{{ trip.season }}</td>
        <td>{{ trip.diversity }}</td>
        <td>{{ trip.finalScore.toFixed(1) }}</td>
      </tr>
    </table>
  </div>
</template>