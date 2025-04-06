import { createStore } from 'vuex'
import horseStore from '@/features/horses/store/horse-store'

const store = createStore({
  modules: {
    horseStore,
  }
})

export default store
