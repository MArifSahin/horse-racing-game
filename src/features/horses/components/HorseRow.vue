<template>
  <tr class="hover:bg-gray-50 border-b">
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
</template>

<script setup lang="ts">
defineProps<{
  horse: {
    id: number
    name: string
    color: string
    condition: number
  }
}>()
</script>

<style scoped>
</style> 