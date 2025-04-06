<template>
    <button 
      :class="[
        'px-4 py-2 text-white rounded',
        isRunning ? 'bg-red-600' : 'bg-green-600',
        !isEnabled && 'opacity-50 cursor-not-allowed'
      ]" 
      @click="isRunning ? pauseRace() : startRace()"
      :disabled="!isEnabled"
    >
      {{ isRunning ? 'Pause Race' : 'Start Race' }}
    </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

defineProps<{
  isEnabled: boolean
}>()

const store = useStore()
const isRunning = computed(() => store.getters['raceStore/isRunning'])
const raceState = ref({ isPaused: false, currentRound: 0 })

const startRace = async () => {
  store.commit('raceStore/setRunning', true)
  raceState.value.isPaused = false
  raceState.value.currentRound = store.getters['raceStore/currentRound']

  for (let round = raceState.value.currentRound; round < 6; round++) {
    if (raceState.value.isPaused) {
      break
    }

    await new Promise((resolve) => setTimeout(resolve, 4000))
    if (raceState.value.isPaused) {
      break
    }
    const horses = store.getters['raceStore/raceSchedule'][round].horses

    const allHorses = store.getters['horseStore/allHorses']
    const rankings = [...horses].sort((a, b) => {
      const condA = allHorses.find((h: any) => h.id === a.id)?.condition ?? 0
      const condB = allHorses.find((h: any) => h.id === b.id)?.condition ?? 0
      return condB - condA
    })

    store.state.raceStore.results.push({
      round: round + 1,
      rankings
    })

    if (round < 5) {
      store.commit('raceStore/incrementRound')
    }
  }

  if (!raceState.value.isPaused) {
    store.commit('raceStore/setRunning', false)
  }
}

const pauseRace = () => {
  raceState.value.isPaused = true
  store.commit('raceStore/setRunning', false)
}
</script>
