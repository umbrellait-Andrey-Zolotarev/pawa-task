<template>
  <main>
    <h1>TaskList</h1>
    <button @click="addTask">Add task</button>
    <pre>{{ tasks }}</pre>
  </main>
</template>

<script setup lang="ts">
import type { Task } from '@/store'
import { useStore } from 'vuex'
import { computed } from 'vue'

const taskStore = useStore()

const tasks = computed<Task[]>(() => taskStore.state.tasks)

const addTask = () => {
  taskStore.dispatch('addTask', { title: 'TEST', dueDate: new Date() } as Task)
}
</script>
