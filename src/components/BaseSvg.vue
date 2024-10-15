<script setup lang="ts">
const props = defineProps<SvgIconProps>()

export interface SvgIconProps {
  name: string
  color?: string
}
const symbolId = computed(() => `#svg-icon-${props.name}`)
</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>
