<script lang="ts" setup>
import { version } from '../../../package.json'
import { toggleDark } from '../hooks/useDark'
</script>

<template>
  <div class="flex flex-wrap h-$h-navbar items-center justify-between border-b border-base p-2">
    <div class="flex gap-1">
      <h1 class="text-lg font-semibold">CodeMirror Theme Vitesse</h1>
      <small>v{{ version }}</small>
    </div>

    <div class="flex gap-2">
      <button
        @click="toggleDark"
        class="btn-icon"
      >
        <div class="i-ri-sun-line dark:i-ri-moon-line" />
      </button>
      <a
        href="https://github.com/ntnyq/codemirror-theme-vitesse"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-icon"
        role="button"
      >
        <div class="i-ri-github-fill" />
      </a>
    </div>
  </div>
</template>
