<template>
  <main class="frame">
    <DarkModeToggle />

    <div class="header">
      <div class="title">PawaTask</div>
      <button @click="addTask">Add a new task</button>
    </div>
    <hr />
    <pre>{{ tasks }}</pre>
  </main>
</template>

<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import type { Task } from '@/store'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const tasks = computed<Task[]>(() => store.state.tasks)

const addTask = () => {
  store.dispatch('addTask', { title: 'TEST', dueDate: new Date() } as Task)
}
</script>

<style scoped>
.frame {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  padding: 1rem;
  height: calc(100vh - 4rem);
  box-shadow: var(--color-border-hover) 0 0 10px -5px;
}

.header {
  display: flex;
  justify-content: space-around;
}

.title {
  width: 100%;
  font-family: 'Proxima Nova', serif;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
}
</style>
