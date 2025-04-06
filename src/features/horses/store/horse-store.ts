import type { Module } from 'vuex'
import type { Horse } from '@/features/horses/types/horse'
import { HORSES } from '@/constants/horse-values'
interface HorsesState {
  horses: Horse[]
}

const horsesModule: Module<HorsesState, any> = {
  namespaced: true,
  state: () => ({
    horses: []
  }),
  mutations: {
    setHorses(state: { horses: Horse[] }, horses: Horse[]) {
      state.horses = horses
    }
  },
  actions: {
    generateHorses({ commit }: { commit: any }) {
      const horses: Horse[] = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: HORSES[i % HORSES.length].name,
        color: HORSES[i % HORSES.length].color,
        condition: Math.floor(Math.random() * 100) + 1
      }))

      commit('setHorses', horses)
    }
  },
  getters: {
    allHorses: (state: { horses: any }) => state.horses
  }
}

export default horsesModule
