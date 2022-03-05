<template>
	<ModalDialog
		v-if="isVisible"
		:show="isVisible"
		@close="() => store.commit('editComment', undefined)">
		<template #header>
			<h3>{{ task.title }}</h3>
		</template>
		<div>
			<div>{{ task.description }}</div>
			<br />
			<div style="display: flex">
				<div style="width: 100%">
					<strong style="font-weight: bold">Date:</strong> {{ task.dueDate }}
				</div>
				<div style="white-space: nowrap">
					<strong style="font-weight: bold">Priority:</strong>
					{{ task.priority.icon }} {{ task.priority.key }}
				</div>
			</div>
			<hr />
			<div v-if="!task.comments || task.comments.length === 0">
				You do not have any comments on this task
				<a href="" @click="$refs.newComment.focus()">add a new comment</a>
			</div>
			<CommentList />
		</div>
		<template #footer>
			<div style="display: flex; align-items: center">
				<input
					ref="newComment"
					v-model="comment.text"
					type="text"
					placeholder="Write your comment here.."
					@keyup.enter="submitComment" />
				<button :disabled="!comment.text" @click="submitComment">
					Add a new comment
				</button>
			</div>
		</template>
	</ModalDialog>
</template>

<script setup lang="ts">
import type { Task, Comment } from "@/store"
import { computed, onBeforeUpdate, ref } from "vue"
import { useStore } from "vuex"
import ModalDialog from "@/components/ModalDialog.vue"
import CommentList from "@/components/CommentList.vue"

const store = useStore()

const isVisible = computed(() => {
	return store.state.taskComment !== undefined
})

const task = ref<Task>(store.state.taskComment as Task)
const comment = ref<Comment>({} as Comment)

const submitComment = async () => {
	if (!comment.value.text) return
	store.dispatch("addComment", comment.value).then(() => {
		comment.value.text = ""
	})
}

onBeforeUpdate(() => {
	task.value = store.state.taskComment
	comment.value.text = ""
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
