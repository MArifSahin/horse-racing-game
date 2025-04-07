import { computed } from 'vue'
import { useStore } from 'vuex'
import type { Horse } from '../types/horse'

export function useHorseList() {
  const store = useStore()
  const horses = computed(() => store.getters['horseStore/allHorses'])

  const updateHorseCondition = (horseId: number, newCondition: number) => {
    store.commit('horseStore/updateHorseCondition', { horseId, newCondition })
  }

  const getHorseById = (id: number): Horse | undefined => {
    return horses.value.find((horse: Horse) => horse.id === id)
  }

  return {
    horses,
    updateHorseCondition,
    getHorseById
  }
} 