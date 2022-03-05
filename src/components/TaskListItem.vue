<template>
	<div class="task-row">
		<input type="checkbox" />
		<div class="task-title">{{ task.title }}</div>
		{{ task.priority.icon }}
		📅
		<span style="margin: 0 10px 0 10px">
			{{ task.dueDate }}
		</span>
		<button @click="showComment()">💬</button>
		<button style="margin-left: 10px" @click="editTask()">✏️</button>
	</div>
</template>

<script setup lang="ts">
import type { Task } from "@/store"
import { useStore } from "vuex"

const props = defineProps<{
	task: Task
}>()

const store = useStore()

const editTask = () => {
	store.commit("editTask", props.task)
}
</script>

<style scoped>
.task-row {
	background-color: var(--color-background-mute);
	padding: 5px 0 5px 0;
	display: flex;
	justify-items: center;
	align-items: center;
	font-family: "Proxima Nova", serif;
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
