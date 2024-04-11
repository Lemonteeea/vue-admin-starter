<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

function add() {
  counterStore.increment()
}
</script>

<template>
  <div class="welcome">
    <h1>This is a welcome page</h1>
    <div class="counter">
      <NButton @click="add">
        add
      </NButton>
      <span>count: {{ counterStore.count }}</span>
      <span>double count: {{ counterStore.doubleCount }}</span>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.counter {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
