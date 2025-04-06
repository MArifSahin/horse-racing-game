<template>
  <div class="bg-red-500 p-4 flex justify-between items-center">
    <h1 class="text-white text-xl font-bold">Horse Racing</h1>
  </div>
  <div class="p-4">
    <div class="bg-yellow-300 px-4 py-2 font-bold text-gray-800 text-center rounded-t-md shadow">
      Horse List (1 - 20)
    </div>

    <div class="overflow-y-auto max-h-[500px] border rounded-b-md shadow">
      <table class="w-full text-left table-auto">
        <thead class="bg-gray-100 border-b sticky top-0 z-10">
          <tr>
            <th class="px-4 py-2 font-semibold">Name</th>
            <th class="px-4 py-2 font-semibold">Condition</th>
            <th class="px-4 py-2 font-semibold">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="horse in store.getters['horseStore/allHorses']"
            :key="horse.id"
            class="hover:bg-gray-50 border-b"
          >
            <td class="px-4 py-2">{{ horse.name }}</td>
            <td class="px-4 py-2">{{ horse.condition }}</td>
            <td class="px-4 py-2">
              <span
                class="inline-block w-3 h-3 rounded-full mr-2 align-middle"
                :class="`bg-${horse.color}-500`"
              ></span>
              {{ horse.color }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted } from 'vue'

const store = useStore()

onMounted(() => {
  store.dispatch('horseStore/generateHorses')
})
</script>

<style scoped>
</style>
