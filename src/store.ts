import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
const STORE_kEY = 'store'

export const priority = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
}

export type Priority =
  | typeof priority.low
  | typeof priority.medium
  | typeof priority.high

export interface Comment {
  author: string
  createdAt: Date
  text: string
}

export interface Task {
  title: string
  description: string
  dueDate: Date
  priority: Priority
  isDone: boolean
  comments: Comment[]
}

export interface State {
  tasks: Task[]
  darkMode: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    tasks: [],
    darkMode: false,
  },
  actions: {
    addTask({ commit }, task: Task) {
      commit('addTask', task)
    },
  },
  mutations: {
    initialiseStore(state) {
      const loadedStore = JSON.parse(
        localStorage.getItem(STORE_kEY) || '{}',
      ) as State

      if (loadedStore.darkMode === undefined)
        loadedStore.darkMode = window.matchMedia(
          '(prefers-color-scheme: dark)',
        ).matches
      this.replaceState(Object.assign(state, loadedStore))
    },
    initDarkMode(state) {
      document.documentElement.className = state.darkMode ? 'dark' : ''
    },
    addTask(state, task: Task) {
      state.tasks.push(task)
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
      document.documentElement.className = state.darkMode ? 'dark' : ''
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}

store.subscribe((mutation, state) => {
  localStorage.setItem(STORE_kEY, JSON.stringify(state))
})
