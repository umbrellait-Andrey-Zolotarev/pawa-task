<template>
  <TaskListView />
</template>

<script lang="ts" setup>
import TaskListView from '@/views/TaskListView.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
onBeforeMount(() => {
  store.commit('initialiseStore')
  store.commit('initDarkMode')
})
</script>

<style>
@import 'assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (min-width: 800px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
