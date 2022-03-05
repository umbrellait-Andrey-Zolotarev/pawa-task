<template>
	<div v-for="comment in store.state.taskComment.comments" :key="comment.id">
		<CommentListItem :comment="comment" />
		<div v-if="divider" style="margin-top: 0.2rem; margin-bottom: 0.2rem" />
	</div>
</template>

<script setup lang="ts">
import CommentListItem from "@/components/CommentListItem.vue"
import { useStore } from "vuex"

defineProps<{
	divider?: boolean
}>()

const store = useStore()
</script>

<style scoped></style>
