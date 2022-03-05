<template>
	<ModalDialog
		v-if="isVisible"
		:show="isVisible"
		@close="() => store.commit('editTask', undefined)">
		<template #header>
			<h3>{{ task.title ? task.title : `New task` }}</h3>
		</template>
		<form class="task-edit" @submit.prevent="submitTask">
			<div>
				<label for="title"> Title:<br /> </label>
				<input id="title" v-model="task.title" type="text" />
			</div>

			<div>
				<label for="description"> Description:<br /> </label>
				<textarea
					id="description"
					v-model="task.description"
					style="height: 80px" />
			</div>

			<div>
				<label for="due-date"> Set due date:<br /> </label>
				<input
					id="due-date"
					v-model="task.dueDate"
					type="date"
					class="half-width-item" />
			</div>

			<div>
				<label for="priority"> Priority:<br /> </label>
				<select
					id="priority"
					v-model="task.priority"
					class="half-width-item"
					required>
					<option
						v-for="pr in Object.keys(PRIORITY)"
						:key="pr"
						:selected="pr === 'High'"
						:value="PRIORITY[pr]">
						{{ PRIORITY[pr].icon }} {{ PRIORITY[pr].key }}
					</option>
				</select>
			</div>
		</form>
		<template #footer>
			<button :disabled="!task.title" @click="submitTask">
				{{ task.id ? "Save changes" : "Add a new task" }}
			</button>
		</template>
	</ModalDialog>
</template>

<script setup lang="ts">
import type { Task } from "@/store"
import { PRIORITY } from "@/store"
import { computed, onBeforeUpdate, ref } from "vue"
import { useStore } from "vuex"
import ModalDialog from "@/components/ModalDialog.vue"

const store = useStore()

const isVisible = computed(() => {
	return store.state.taskEdit !== undefined
})

const task = ref(store.state.taskEdit as Task)

const submitTask = () => {
	if (task.value.title) store.dispatch("saveTask", task.value)
	store.commit("editTask", undefined)
}

onBeforeUpdate(() => {
	task.value = store.state.taskEdit
})
</script>

<style scoped>
.task-edit > div {
	padding-bottom: 15px;
}

textarea,
input[type="text"] {
	width: 100%;
}

.half-width-item {
	width: 50%;
}

@media (max-width: 600px) {
	.half-width-item {
		width: 100%;
	}
}
</style>
