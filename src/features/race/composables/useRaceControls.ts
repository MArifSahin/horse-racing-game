import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import type { Horse } from '@/features/horses/types/horse'
import { useRaceTrack } from './useRaceTrack'

interface RaceState {
  isPaused: boolean
  currentRound: number
}

export function useRaceControls() {
  const store = useStore()
  const isRunning = computed(() => store.getters['raceStore/isRunning'])
  const raceState = ref<RaceState>({ isPaused: false, currentRound: 0 })
  const { hasAnyHorseFinished } = useRaceTrack()

  const startRace = async () => {
    raceState.value.isPaused = false
    raceState.value.currentRound = store.getters['raceStore/currentRound']
    store.commit('raceStore/setRunning', true)

    for (let round = raceState.value.currentRound; round < 6; round++) {
      if (round < 6) {
        store.commit('raceStore/incrementRound')
      }
      if (raceState.value.isPaused) {
        break
      }

      await new Promise<void>((resolve) => {
        const checkFinish = () => {
          if (hasAnyHorseFinished.value || raceState.value.isPaused) {
            resolve()
          }
        }
        const interval = setInterval(() => {
          checkFinish()
          if (hasAnyHorseFinished.value || raceState.value.isPaused) {
            clearInterval(interval)
            resolve()
          }
        }, 50)
      })

      if (raceState.value.isPaused) {
        break
      }

      const horses = store.getters['raceStore/raceSchedule'][round].horses
      const allHorses = store.getters['horseStore/allHorses']
      
      const rankings = [...horses].sort((a, b) => {
        const condA = allHorses.find((h: Horse) => h.id === a.id)?.condition ?? 0
        const condB = allHorses.find((h: Horse) => h.id === b.id)?.condition ?? 0
        return condB - condA
      })

      if (store.state.raceStore.results) {
        store.state.raceStore.results.push({
          round: round,
          rankings
        })
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

  return {
    isRunning,
    startRace,
    pauseRace
  }
} 