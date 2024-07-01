<script lang="ts" setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import CodeEditor from './components/CodeEditor/index.vue'
import typescript from './examples/typescript.ts?raw'
import { themes } from './components/CodeEditor/theme'

const code = ref(typescript)
const language = ref('typescript')
</script>

<template>
  <main class="h-screen flex flex-col gap-4 relative">
    <Navbar />
    <div class="flex-auto w-full max-w-[1200px] mx-auto overflow-y-auto">
      <CodeEditor
        v-model="code"
        :language="language"
        :extensions="themes.vitesseLight"
        class="flex-1 w-full"
      />
    </div>
  </main>
</template>
