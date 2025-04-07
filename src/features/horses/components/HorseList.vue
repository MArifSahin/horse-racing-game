<template>
  <div class="p-4">
    <div class="bg-yellow-300 px-4 py-2 font-bold text-gray-800 text-center rounded-t-md shadow">
      Horse List (1 - 20)
    </div>

    <div class="overflow-y-auto max-h-[500px] border rounded-b-md shadow">
      <table class="w-full text-left table-auto">
        <HorseTableHeader />
        <tbody>
          <HorseRow
            v-for="horse in horses"
            :key="horse.id"
            :horse="horse"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import HorseTableHeader from './HorseTableHeader.vue'
import HorseRow from './HorseRow.vue'
import { useHorseList } from '../composables/useHorseList'

const { horses } = useHorseList()
</script>

<style scoped>
</style> 