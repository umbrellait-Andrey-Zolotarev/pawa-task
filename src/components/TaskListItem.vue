<template>
	<div class="comment-row">
		<input :checked="task.isDone" type="checkbox" @input="toggleIsDone" />
		<div
			class="comment-info"
			:style="task.isDone ? { 'text-decoration': 'line-through' } : {}">
			{{ task.title }}
		</div>
		{{ task.priority.icon }}
		📅
		<span style="margin: 0 10px 0 10px">
			{{ task.dueDate }}
		</span>
		<button @click="showComment">💬</button>
		<button style="margin-left: 10px" @click="editTask">✏️</button>
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

const toggleIsDone = () => {
	const task = props.task
	task.isDone = !task.isDone
	store.commit("saveTask", task)
	console.log(task.isDone)
}

const showComment = () => {
	store.commit("editComment", props.task)
}
</script>

<style scoped>
.comment-row {
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

.comment-info {
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
