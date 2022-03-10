<template>
	<button class="button dark-button" @click="toggleDarkMode">
		<span v-if="!darkMode">🌙</span>
		<span v-else>☀️</span>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import type { Task } from '@/types'

const store = useStore()

const darkMode = computed<Task[]>(() => store.state.darkMode)

const toggleDarkMode = () => {
	store.commit('toggleDarkMode')
}
</script>

<style scoped>
.button {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: var(--color-background);
	border: 1px solid var(--color-border);
	box-shadow: var(--color-border-hover) 0 0 10px;
	position: fixed;
	top: 15px;
	right: 15px;
	z-index: 1;
	padding-right: 5px;
}
@media (max-width: 500px) {
	.dark-button {
		position: fixed;
		left: calc(50% - 18px);
		top: 15px;
	}
}
</style>
