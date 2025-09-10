<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import CodeEditor from './components/CodeEditor/index.vue'
import { languages } from './components/CodeEditor/language'
import { themes } from './components/CodeEditor/theme'
import Navbar from './components/Navbar.vue'
import Select from './components/Select.vue'
import { isDark } from './hooks/useDark'
import type { ThemeName } from './components/CodeEditor/theme'

const code = ref('')

const language = useStorage('language', 'typescript')
const lightTheme = useStorage<ThemeName>('lightTheme', 'vitesseLight')
const darkTheme = useStorage<ThemeName>('darkTheme', 'vitesseDark')

const activeTheme = computed(() =>
  isDark.value ? themes[darkTheme.value] : themes[lightTheme.value],
)

const languageOptions = computed(() =>
  languages.map(lang => ({
    label: lang.name,
    value: lang.id,
  })),
)

async function update() {
  const sample = await import(`./samples/${language.value}.sample?raw`)
    .then(m => m.default)
    .catch(() => `// No sample found for ${language.value}`)
  code.value = sample
}

watch(
  language,
  () => {
    update()
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <main class="h-screen flex flex-col relative">
    <Navbar />
    <div class="max-w-1200px mx-auto md:flex gap-4">
      <Select
        v-model="language"
        :options="languageOptions"
        label="Language"
      />
      <Select
        v-model="lightTheme"
        :options="[
          {
            label: 'Vitesse Light',
            value: 'vitesseLight',
          },
        ]"
        label="Light Theme"
      />
      <Select
        v-model="darkTheme"
        :options="[
          {
            label: 'Vitesse Dark',
            value: 'vitesseDark',
          },
          {
            label: 'Vitesse Black',
            value: 'vitesseBlack',
          },
        ]"
        label="Dark Theme"
      />
    </div>
    <div class="flex-auto w-full p-4 max-w-1200px mx-auto of-y-auto">
      <CodeEditor
        v-model="code"
        :language
        :extensions="activeTheme"
        class="flex-1 w-full"
      />
    </div>
  </main>
</template>
