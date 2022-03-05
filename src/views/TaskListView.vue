<template>
  <main class="frame">
    <DarkModeToggle />

    <div class="header">
      <div class="title">PawaTask</div>
      <button @click="addTask">Add a new task</button>
    </div>
    <hr />

    <TaskList divider />

    <ModalDialog
      :show="addTaskDialog"
      @close="(input) => (addTaskDialog = input)"
    >
      <TaskEditView />
    </ModalDialog>
  </main>
</template>

<script setup lang="ts">
import ModalDialog from '@/components/ModalDialog.vue'
import TaskEditView from '@/views/TaskEditView.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import TaskList from '@/components/TaskList.vue'

const store = useStore()

const addTaskDialog = ref(false)

const addTask = () => {
  addTaskDialog.value = true
  //store.dispatch('addTask', { title: 'TEST', dueDate: new Date() } as Task)
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
