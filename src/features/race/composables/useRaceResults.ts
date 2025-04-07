import { computed } from 'vue'
import { useStore } from 'vuex'
import type { Horse } from '@/features/horses/types/horse'

export function useRaceResults() {
  const store = useStore()

  const results = computed(() => store.getters['raceStore/raceResults'])
  const allHorses = computed(() => store.getters['horseStore/allHorses'])

  const getHorseDetails = (id: number): Horse | undefined => {
    return allHorses.value.find((h: Horse) => h.id === id)
  }

  return {
    results,
    getHorseDetails
  }
} 