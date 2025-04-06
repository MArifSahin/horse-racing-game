import type { Module } from 'vuex'
import type { RaceRound, RaceResult } from '../types/race'
import { roundDistances } from '@/constants/race-values'
import { HORSES } from '@/constants/horse-values'

interface RaceState {
  schedule: RaceRound[]
  currentRound: number
  results: RaceResult[]
  isRunning: boolean
}

const raceModule: Module<RaceState, any> = {
  namespaced: true,
  state: () => ({
    schedule: [],
    currentRound: 0,
    results: [],
    isRunning: false
  }),
  mutations: {
    setSchedule(state, schedule: RaceRound[]) {
      state.schedule = schedule
    },
    setResults(state, results: RaceResult[]) {
      state.results = results
    },
    setRunning(state, isRunning: boolean) {
      state.isRunning = isRunning
    },
    resetRace(state) {
      state.schedule = []
      state.results = []
      state.currentRound = 0
    },
    incrementRound(state) {
      state.currentRound++
    }
  },
  actions: {
    generateSchedule({ commit }) {
      const fullHorsePool = Array.from({ length: 20 }, (_, i) => i + 1)
      const shuffle = (array: number[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      
      const schedule = roundDistances.map((distance, index) => {
        const shuffled = shuffle(fullHorsePool)
        return {
          round: index + 1,
          distance,
          horses: shuffled.slice(0, 10).map(id => ({ id, name: HORSES[id - 1].name, color: HORSES[id - 1].color }))
        }
      })

      commit('setSchedule', schedule)
    }
  },
  getters: {
    raceSchedule: (state) => state.schedule,
    currentRound: (state) => state.currentRound,
    raceResults: (state) => state.results,
    isRunning: (state) => state.isRunning
  }
}

export default raceModule
