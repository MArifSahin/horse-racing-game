<template>
    <div class="bg-red-500 p-4 flex justify-between items-center">
      <h1 class="text-white text-xl font-bold">Horse Racing</h1>
    </div>
    <HorseList />
  </template>
  
  <script setup lang="ts">
  import { useStore } from 'vuex'
  import { onMounted } from 'vue'
  import HorseList from '@/features/horses/components/HorseList.vue'
  
  const store = useStore()
  
  onMounted(() => {
    store.dispatch('horseStore/generateHorses')
  })
  </script>
  
  <style scoped>
  </style>
  