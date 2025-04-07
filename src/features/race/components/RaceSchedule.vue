<template>
  <div class="p-4 space-y-6">
    <div class="bg-blue-500 p-4 flex justify-between items-center">
      <h1 class="text-white text-xl font-bold">Program</h1>
    </div>
    <div
      v-for="round in schedule"
      :key="round.round"
      class="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div class="bg-blue-600 text-white px-4 py-2 font-semibold">
        {{ formatOrdinal(round.round) }} LAP – {{ round.distance }}m
      </div>
      <div class="p-4">
        <table class="min-w-full text-sm text-left border border-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-3 py-2 border-b border-gray-300">Position</th>
              <th class="px-3 py-2 border-b border-gray-300">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(horse, index) in round.horses"
              :key="index"
              class="odd:bg-white even:bg-gray-50"
            >
              <td class="px-3 py-2 border-b border-gray-200">{{ index + 1 }}</td>
              <td class="px-3 py-2 border-b border-gray-200">{{ horse.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRaceSchedule } from '../composables/useRaceSchedule'
import { formatOrdinal } from '@/utils/formatters'

const { schedule } = useRaceSchedule()
</script>

