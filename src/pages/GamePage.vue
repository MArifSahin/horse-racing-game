<template>
    <div class="bg-red-500 p-4 flex justify-between items-center">
      <h1 class="text-white text-xl font-bold">Horse Racing</h1>
      <div class="flex gap-2">
        <button class="px-4 py-2 bg-blue-600 text-white rounded" @click="generate">GENERATE PROGRAM</button>
        <RaceControls :is-enabled="hasGeneratedSchedule" />  
      </div>
    </div>
    <div class="grid grid-cols-5 gap-4 p-4">
      <div class="col-span-1">
        <HorseList />
      </div>
      <div class="col-span-3">
        <RaceTrack />
        
      </div>
      <div class="col-span-1">
        <RaceSchedule v-if="hasGeneratedSchedule" />
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import HorseList from '@/features/horses/components/HorseList.vue'
import RaceSchedule from '@/features/race/components/RaceSchedule.vue'
import RaceTrack from '@/features/race/components/RaceTrack.vue'
import RaceControls from '@/features/race/components/RaceControls.vue'
const store = useStore()
const hasGeneratedSchedule = ref(false)

const generate = () => {
  store.commit('raceStore/resetRace')
  store.dispatch('raceStore/generateSchedule')
  hasGeneratedSchedule.value = true
}

onMounted(() => {
  store.dispatch('horseStore/generateHorses')
})
</script>
  