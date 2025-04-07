<template>
  <div class="p-4">
    <div>
      <h2 class="text-xl font-bold mb-4">Race Results</h2>
      <div v-if="!results || results.length === 0" class="text-gray-500">
        No results yet. Start the race to see the rankings.
      </div>
      <div v-else class="space-y-4">
        <div v-for="round in results" :key="round.round" class="bg-white shadow rounded p-4">
          <h3 class="font-semibold text-gray-700 mb-3">Round {{ round.round + 1 }}</h3>
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <div class="divide-y divide-gray-200">
              <div
                v-for="(horse, index) in round.rankings"
                :key="horse.id"
                class="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                <div class="w-8 text-center font-bold text-gray-500">
                  {{ index + 1 }}
                </div>
                <div class="flex-grow font-medium">
                  {{ getHorseDetails(horse.id)?.name || 'Unknown Horse' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRaceResults } from '../composables/useRaceResults'

const { results, getHorseDetails } = useRaceResults()
</script>
