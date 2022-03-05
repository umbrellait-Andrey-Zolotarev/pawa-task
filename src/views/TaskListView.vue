<template>
	<main class="frame">
		<DarkModeToggle />

		<div class="header">
			<div class="title">PawaTask</div>
			<button @click="reset">RESET</button>
			<div style="width: 10px"></div>
			<button @click="addTask">Add a new task</button>
		</div>
		<hr />

		<div v-if="store.state.tasks.length === 0">
			You do not have any tasks
			<a href="" @click.prevent="addTask">add a new task</a>
		</div>
		<TaskList v-else divider />

		<TaskEditView />
		<TaskCommentView />
	</main>
</template>

<script setup lang="ts">
import { PRIORITY } from "@/store"
import type { Task } from "@/store"
import { useStore } from "vuex"
import DarkModeToggle from "@/components/DarkModeToggle.vue"
import TaskList from "@/components/TaskList.vue"
import TaskEditView from "@/views/TaskEditView.vue"
import TaskCommentView from "@/views/TaskCommentView.vue"

const store = useStore()

const reset = () => {
	localStorage.clear()
	window.location.reload()
}

const addTask = () => {
	const date = new Date().toISOString().split("T")[0]
	store.commit("editTask", {
		title: "",
		description: "",
		priority: PRIORITY.LOW,
		isDone: false,
		dueDate: date,
	} as Task)
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
	font-family: "Proxima Nova", serif;
	font-weight: 700;
	font-style: normal;
	font-size: 24px;
}
</style>
