import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

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
  comments: Comment[]
}

export interface State {
  tasks: Task[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    tasks: [],
  },
  actions: {
    addTask({ commit }, task: Task) {
      commit('addTask', task)
    },
  },
  mutations: {
    addTask: (state, task: Task) => {
      state.tasks.push(task)
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}
