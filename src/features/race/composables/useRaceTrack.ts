import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import type { Horse } from '@/features/horses/types/horse'

interface RunningHorse {
  id: number
  name: string
  condition: number
  color: string
  position: number
  finished: boolean
  finishTime: number
}

export function useRaceTrack() {
  const store = useStore()

  const schedule = computed(() => store.getters['raceStore/raceSchedule'])
  const currentRound = computed(() => store.getters['raceStore/currentRound'])
  const allHorses = computed(() => store.getters['horseStore/allHorses'])
  const isRunning = computed(() => store.getters['raceStore/isRunning'])
  const activeRound = computed(() => schedule.value[currentRound.value-1] || null)

  const runningHorses = ref<RunningHorse[]>([])
  const raceFinished = ref(false)
  const frameCount = ref(0)
  const roundDistance = ref(0)
  const animationFrameId = ref<number | null>(null)

  const hasAnyHorseFinished = computed(() => {
    return runningHorses.value.some(horse => horse.finished)
  })

  const stopAnimation = () => {
    if (animationFrameId.value !== null) {
      cancelAnimationFrame(animationFrameId.value)
      animationFrameId.value = null
    }
  }

  watch(activeRound, (round) => {
    roundDistance.value = round?.distance ?? 0
    if (!round || !isRunning.value) return
    raceFinished.value = false
    frameCount.value = 0

    runningHorses.value = round.horses.map((horse: Horse) => {
      const returnHorse = allHorses.value.find((h: Horse) => h.id === horse.id)!
      return {
        id: returnHorse.id,
        name: returnHorse.name,
        condition: returnHorse.condition,
        color: returnHorse.color,
        position: 0,
        finished: false,
        finishTime: 0,
      }
    })

    if (isRunning.value) {
      animationFrameId.value = requestAnimationFrame(updatePositions)
    }
  })

  function updatePositions() {
    if (!isRunning.value) {
      animationFrameId.value = null
      return
    }

    frameCount.value++

    let anyRunning = false

    runningHorses.value.forEach((horse) => {
      if (horse.finished) return

      const speed = (horse.condition / roundDistance.value*5)
      horse.position += speed
      if (horse.position >= 100) {
        horse.position = 100
        horse.finished = true
        horse.finishTime = frameCount.value
      } else {
        anyRunning = true
      }
    })

    if (anyRunning && isRunning.value) {
      animationFrameId.value = requestAnimationFrame(updatePositions)
    } else {
      raceFinished.value = true
      animationFrameId.value = null
    }
  }

  return {
    activeRound,
    currentRound,
    runningHorses,
    roundDistance,
    raceFinished,
    hasAnyHorseFinished,
    stopAnimation
  }
} 