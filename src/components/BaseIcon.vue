<script setup lang="ts">
import type { IconProps as NIconProps } from 'naive-ui'
import { Icon as Iconify } from '@iconify/vue'

export interface IconProps extends /* @vue-ignore */ NIconProps {
  icon: string
}
const props = defineProps<IconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <Iconify :icon="props.icon" />
    <slot />
  </NIcon>
</template>
