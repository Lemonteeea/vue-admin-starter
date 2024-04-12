<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

function add() {
  counterStore.increment()
}
</script>

<template>
  <div class="flex flex-col justify-center gap-6">
    <h1>This is a welcome page</h1>
    <div class="flex items-center gap-12">
      <Icon class="cursor-pointer" size="32" icon="ic:outline-add" @click="add" />
      <span>count: {{ counterStore.count }}</span>
      <span>double count: {{ counterStore.doubleCount }}</span>
    </div>
  </div>
</template>
