import { computed } from 'vue'
import { useStore } from 'vuex'

export function useRaceSchedule() {
  const store = useStore()
  const schedule = computed(() => store.getters['raceStore/raceSchedule'])

  return {
    schedule
  }
} 