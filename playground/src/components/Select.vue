<script lang="ts" setup>
defineProps<{
  label?: string
  options?: string[] | Array<{ label: string; value: string }>
}>()

const selectedValue = defineModel<string>()
</script>

<template>
  <div class="flex justify-between items-center gap-3 p-2">
    <label class="text-base">
      {{ label }}
    </label>
    <select
      v-model="selectedValue"
      class="w-48 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
    >
      <option
        v-for="option in options"
        :key="typeof option === 'string' ? option : option.value"
        :value="typeof option === 'string' ? option : option.value"
      >
        {{ typeof option === 'string' ? option : option.label }}
      </option>
    </select>
  </div>
</template>
