<template>
  <div>
    <form class="task-edit" @submit.prevent="store.dispatch('addTask', task)">
      <div>
        <label for="title"> Title:<br /> </label>
        <input id="title" v-model="task.title" type="text" />
      </div>

      <div>
        <label for="description"> Description:<br /> </label>
        <textarea
          id="description"
          v-model="task.description"
          style="height: 80px"
        />
      </div>

      <div>
        <label for="due-date"> Set due date:<br /> </label>
        <input
          id="due-date"
          v-model="task.dueDate"
          type="date"
          style="width: 50%"
        />
      </div>

      <div>
        <label for="priority"> Priority:<br /> </label>
        <select id="priority" v-model="task.priority" style="width: 50%">
          <option v-for="pr in Object.keys(priority)" :key="pr">
            {{ priority[pr] }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/store'
import { priority } from '@/store'
import { ref } from 'vue'
import { useStore } from 'vuex'

const task = ref({} as Task)
const store = useStore()
</script>

<style scoped>
.task-edit > div {
  padding-bottom: 15px;
}

textarea,
input[type='text'] {
  width: 100%;
}
</style>
