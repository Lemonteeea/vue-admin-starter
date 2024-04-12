<script setup lang="ts">
import { Icon as Iconify } from '@iconify/vue'
import type { IconProps as NIconProps } from 'naive-ui'

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
