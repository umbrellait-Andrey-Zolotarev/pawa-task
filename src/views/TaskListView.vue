<template>
  <main class="frame">
    <DarkModeToggle />
    <div class="header">
      <div class="title">TaskList</div>
      <button @click="addTask">Add task</button>
    </div>
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
}
</style>
