<template>
    <div class="bg-red-500 p-4 flex justify-between items-center">
      <h1 class="text-white text-xl font-bold">Horse Racing Game</h1>
      <div class="flex gap-2">
        <button 
          class="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed" 
          @click="generate"
          :disabled="isRaceRunning"
        >GENERATE PROGRAM</button>
        <RaceControls :is-enabled="hasGeneratedSchedule" />  
      </div>
    </div>
    <div class="grid grid-cols-5 gap-4 p-4">
      <div class="col-span-1">
        <HorseList />
      </div>
      <div class="col-span-2">
        <RaceTrack />
        
      </div>
      <div class="col-span-2">
        <div class="flex gap-4 h-[600px]">
          <div class="flex-1 overflow-y-auto">
            <RaceSchedule v-if="hasGeneratedSchedule" />
          </div>
          <div class="flex-1 overflow-y-auto">
            <RaceResults />
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted, ref, computed } from 'vue'
import HorseList from '@/features/horses/components/HorseList.vue'
import RaceSchedule from '@/features/race/components/RaceSchedule.vue'
import RaceTrack from '@/features/race/components/RaceTrack.vue'
import RaceControls from '@/features/race/components/RaceControls.vue'
import RaceResults from '@/features/race/components/RaceResults.vue'
const store = useStore()
const hasGeneratedSchedule = ref(false)

const isRaceRunning = computed(() => store.getters['raceStore/isRunning'])

const generate = () => {
  store.commit('raceStore/resetRace')
  store.dispatch('raceStore/generateSchedule')
  hasGeneratedSchedule.value = true
}

onMounted(() => {
  store.dispatch('horseStore/generateHorses')
})
</script>
  