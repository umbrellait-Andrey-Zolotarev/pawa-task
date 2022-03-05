<template>
  <div v-for="task in store.state.tasks" :key="task.id">
    <TaskListItem :task="task" />
    <hr v-if="divider" style="margin-top: 0.2rem; margin-bottom: 0.2rem" />
  </div>
</template>

<script setup lang="ts">
import TaskListItem from '@/components/TaskListItem.vue'
import { useStore } from 'vuex'

const store = useStore()
defineProps<{
  divider?: boolean
}>()
</script>

<style scoped></style>
