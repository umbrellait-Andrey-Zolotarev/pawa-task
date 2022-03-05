import type { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
const STORE_kEY = "store"

export const PRIORITY = {
	LOW: { key: "Low", icon: "💙" },
	MEDIUM: { key: "Medium", icon: "💚" },
	HIGH: { key: "High", icon: "💗" },
}

export type Priority =
	| typeof PRIORITY.LOW
	| typeof PRIORITY.MEDIUM
	| typeof PRIORITY.HIGH

export interface Comment {
	id?: number
	author: string
	createdAt: Date
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
	darkMode: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	state: {
		tasks: [],
		taskEdit: undefined,
		darkMode: false,
	},
	actions: {
		saveTask({ commit }, task: Task) {
			commit("saveTask", task)
		},
	},
	mutations: {
		initialiseStore(state) {
			const loadedStore = JSON.parse(
				localStorage.getItem(STORE_kEY) || "{}",
			) as State

			if (loadedStore.darkMode === undefined)
				loadedStore.darkMode = window.matchMedia(
					"(prefers-color-scheme: dark)",
				).matches
			this.replaceState(Object.assign(state, loadedStore))
		},
		initDarkMode(state) {
			document.documentElement.className = state.darkMode ? "dark" : ""
		},
		saveTask(state, task: Task) {
			if (task.id) state.tasks.filter((t) => (t.id = task.id))[0] = task
			else {
				task.id = new Date().getTime()
				state.tasks.push(task)
			}
		},
		editTask(state, task?: Task) {
			state.taskEdit = task
		},
		toggleDarkMode(state) {
			state.darkMode = !state.darkMode
			document.documentElement.className = state.darkMode ? "dark" : ""
		},
	},
})

export function useStore() {
	return baseUseStore(key)
}

store.subscribe((mutation, state) => {
	localStorage.setItem(STORE_kEY, JSON.stringify(state))
})
