<template>
	<TaskListView />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import TaskListView from '@/views/TaskListView.vue'

const store = useStore()
onBeforeMount(() => {
	store.commit('initializeStore')
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
		grid-template-columns: 1fr;
		padding: 0 2rem;
	}
	.frame {
		width: 600px;
	}
}

@media (max-width: 500px) {
	#app {
		padding: 0;
	}
}
</style>
