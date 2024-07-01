<script lang="ts" setup>
import { computed, ref } from 'vue'
import Navbar from './components/Navbar.vue'
import CodeEditor from './components/CodeEditor/index.vue'
import typescript from './examples/typescript.ts?raw'
import { themes } from './components/CodeEditor/theme'
import { isDark } from './hooks/useDark'

const code = ref(typescript)
const language = ref('typescript')

const lightTheme = ref('vitesseLight')
const darkTheme = ref('vitesseDark')

const activeTheme = computed(() =>
  isDark.value
    ? themes[darkTheme.value as keyof typeof themes]
    : themes[lightTheme.value as keyof typeof themes],
)
</script>

<template>
  <main class="h-screen flex flex-col relative">
    <Navbar />
    <div class="max-w-[1200px] mx-auto md:flex gap-4">
      <div class="flex items-center gap-3 p-2">
        <label
          class="text-base"
          for="light_theme"
        >
          Light Theme
        </label>
        <select
          v-model="lightTheme"
          id="light_theme"
          class="w-48 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Select light theme"
        >
          <option
            value="vitesseLight"
            selected
          >
            Vitesse Light
          </option>
        </select>
      </div>
      <div class="flex items-center gap-3 p-2">
        <label
          class="text-base"
          for="dark_theme"
        >
          Dark Theme
        </label>
        <select
          v-model="darkTheme"
          id="dark_theme"
          class="w-48 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Select dark theme"
        >
          <option
            value="vitesseDark"
            selected
          >
            Vitesse Dark
          </option>
          <option value="vitesseBlack">Vitesse Black</option>
        </select>
      </div>
    </div>
    <div class="flex-auto w-full p-4 max-w-[1200px] mx-auto of-y-auto">
      <CodeEditor
        v-model="code"
        :language="language"
        :extensions="activeTheme"
        class="flex-1 w-full"
      />
    </div>
  </main>
</template>
