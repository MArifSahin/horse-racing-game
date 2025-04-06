import { createStore } from 'vuex'
import horseStore from './modules/horse-store'

const store = createStore({
  modules: {
    horseStore
  }
})

export default store
