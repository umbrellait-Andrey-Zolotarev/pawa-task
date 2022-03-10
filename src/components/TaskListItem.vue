<template>
	<div class="task-row" :class="{ 'task-is-done': task.isDone }">
		<input :checked="task.isDone" type="checkbox" @input="toggleIsDone" />
		<div class="task-info">
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
import { useStore } from "vuex"
import type { Task } from "@/types"

const props = defineProps<{
	task: Task
}>()

const store = useStore()

const editTask = () => {
	store.commit("editTask", props.task)
}

const toggleIsDone = () => {
	const { task } = props
	task.isDone = !task.isDone
	store.commit("saveTask", task)
}

const showComment = () => {
	store.commit("editComment", props.task)
}
</script>

<style scoped>
.task-row {
	background-color: var(--color-background-mute);
	padding: 5px 0 5px 0;
	display: flex;
	justify-items: center;
	align-items: center;
	font-weight: 200;
	font-style: normal;
	font-size: 15px;
	white-space: nowrap;
}

.task-info {
	white-space: nowrap;
	width: 100%;
	margin-left: 10px;
	text-overflow: ellipsis;
}

button {
	height: 32px;
	width: 40px;
}

.task-is-done {
	text-decoration: line-through;
	background: repeating-linear-gradient(45deg, #eee 5px, #aaa 10px, #eee 15px);
}
</style>
