import type { PRIORITY } from "@/constants"

export type Priority =
	| typeof PRIORITY.LOW
	| typeof PRIORITY.MEDIUM
	| typeof PRIORITY.HIGH

export interface Comment {
	id?: number
	author: string
	createdAt: string
	text: string
}

export interface Task {
	id?: number
	title: string
	description: string
	dueDate: string
	priority: Priority
	isDone: boolean
	comments: Comment[]
}

export interface State {
	tasks: Task[]
	taskEdit?: Task
	taskComment?: Task
	darkMode: boolean
}
