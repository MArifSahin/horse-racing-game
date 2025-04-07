import horsesModule from '../store/horse-store'
import { createStore } from 'vuex'
import { describe, it, expect } from 'vitest'


describe('horses module', () => {
  it('generates 20 horses with name, color, and condition properties', () => {
    const store = createStore({
      modules: {
        horses: horsesModule
      }
    })

    store.dispatch('horses/generateHorses')

    const horses = store.getters['horses/allHorses']
    expect(horses.length).toBe(20)

    for (const horse of horses) {
      expect(horse.name).toBeDefined()
      expect(horse.color).toBeDefined()
      expect(horse.condition).toBeGreaterThanOrEqual(1)
      expect(horse.condition).toBeLessThanOrEqual(100)
    }
  })
})
