<template>
    <button 
      :class="[
        'px-4 py-2 text-white rounded',
        isRunning ? 'bg-red-600' : 'bg-green-600',
        !isEnabled && 'opacity-50 cursor-not-allowed'
      ]" 
      @click="isRunning ? pauseRace() : startRace()"
      :disabled="!isEnabled"
    >
      {{ isRunning ? 'PAUSE RACE' : 'START RACE' }}
    </button>
</template>

<script setup lang="ts">
import { useRaceControls } from '../composables/useRaceControls'

defineProps<{
  isEnabled: boolean
}>()

const { isRunning, startRace, pauseRace } = useRaceControls()
</script>
