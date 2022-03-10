<template>
	<div class="comment-row">
		<div>
			<span style="font-weight: bold">{{ comment.author }}</span>
			@ {{ comment.createdAt }}
		</div>
		<div>{{ comment.text }}</div>
	</div>
</template>

<script setup lang="ts">
import type { Comment } from "@/types"

defineProps<{
	comment: Comment
}>()
</script>

<style scoped>
.comment-row {
	background-color: var(--color-background-mute);
	padding: 0px 0 0px 0;
	font-family: "Proxima Nova", serif;
	font-weight: 200;
	font-style: normal;
	font-size: 15px;
	white-space: nowrap;
}
</style>
