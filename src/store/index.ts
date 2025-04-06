import { createStore } from 'vuex'
import horseStore from '@/features/horses/store/horse-store'
import raceStore from '@/features/race/store/race-store'

const store = createStore({
  modules: {
    horseStore,
    raceStore
  }
})

export default store
