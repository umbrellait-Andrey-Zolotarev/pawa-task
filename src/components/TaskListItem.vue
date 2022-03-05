<template>
  <div class="task-row">
    <input type="checkbox" />
    <div class="task-title">{{ task.title }}</div>
    <img style="height: 20px" src="@/assets/cal.png" alt="cal" />
    <span style="margin: 0 10px 0 10px">
      {{ task.dueDate.toString().slice(0, 10) }}
    </span>
    <button>
      <img
        style="height: 20px; margin-top: 5px"
        src="@/assets/comment.png"
        alt="comment"
      />
    </button>
    <button style="margin-left: 10px">
      <img
        style="height: 20px; margin-top: 5px"
        src="@/assets/edit.png"
        alt="edit"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/store'

defineProps<{
  task: Task
}>()
</script>

<style scoped>
.task-row {
  background-color: var(--color-background-mute);
  padding: 5px 0 5px 0;
  display: flex;
  justify-items: center;
  align-items: center;
  font-family: 'Proxima Nova', serif;
  font-weight: 200;
  font-style: normal;
  font-size: 15px;
  white-space: nowrap;
}

.task-title {
  white-space: nowrap;
  width: 100%;
  margin-left: 10px;
  text-overflow: ellipsis;
}

button {
  height: 32px;
  width: 40px;
}
</style>
