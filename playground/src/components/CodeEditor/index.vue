<script lang="ts" setup>
import { computed } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { languages } from './language'
import type { Props } from 'vue-codemirror'
import type { Extension } from '@codemirror/state'

type CodeEditorProps = Omit<Partial<Props>, 'modelValue'> & {
  language?: string
}

const props = withDefaults(defineProps<CodeEditorProps>(), {
  indentWithTab: true,
  tabSize: 2,
})

const code = defineModel<string>()

const resolvedExtensions = computed<Extension[]>(() => [
  ...[props.extensions ?? []],
  ...[props.language ? [languages.find(item => item.id === props.language)!.extension()] : []],
])
</script>

<template>
  <Codemirror
    v-model="code"
    v-bind="$attrs"
    :indent-with-tab="indentWithTab"
    :tab-size="tabSize"
    :extensions="resolvedExtensions"
  />
</template>
