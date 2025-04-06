<template>
  <div class="p-4">
    <div class="relative w-full">
      <div class="h-[400px] bg-gray-100 border rounded overflow-hidden">
        <div class="absolute left-0 top-0 w-8 bg-gray-200 border-r flex flex-col">
        <div
          v-for="i in 10"
          :key="i"
          class="h-[40px] flex items-center justify-center font-bold text-gray-600"
          :class="activeRound?.horses[i-1] ? `bg-${activeRound.horses[i-1].color}-500` : ''"
        >
          {{ i }}
        </div>
      </div>

      <div class="ml-8 h-full relative">
        <div
          v-for="i in 10"
          :key="i"
          class="absolute left-0 w-full border-t border-dashed border-gray-300"
          :style="{ top: `${i * 40}px` }"
        />

        <template v-if="activeRound">
          <div
            v-for="(horse, index) in activeRound.horses"
            :key="horse.id"
            class="absolute transition-all duration-1000 ease-out flex items-center"
            :style="{
              top: `${index * 40 + 10}px`,
            }"
          >
            <span class="inline-block scale-x-[-1]">🐎</span>
          </div>
        </template>

      </div>
    </div>
    <div class="absolute right-0 top-0 h-full w-1 bg-red-500">
      <div class="absolute bottom-0 right-2 text-sm font-bold text-red-500">
        FINISH
      </div>
    </div>    
    <div class="text-center text-sm text-red-600 font-bold">
      {{ formatOrdinal(currentRound + 1) }} Lap - {{ activeRound?.distance }}m
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { formatOrdinal } from '@/utils/formatters'

const store = useStore()

const schedule = computed(() => store.getters['raceStore/raceSchedule'])
const currentRound = computed(() => store.getters['raceStore/currentRound'])

const activeRound = computed(() => {
  if (!schedule.value || !Array.isArray(schedule.value) || schedule.value.length === 0) {
    return null
  }
  return schedule.value[currentRound.value] || null
})
</script>
