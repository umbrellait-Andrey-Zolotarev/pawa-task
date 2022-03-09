import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { store } from "@/store"
import TaskListView from "@/views/TaskListView.vue"

describe("TaskListView", () => {
	it("renders properly", () => {
		const wrapper = mount(TaskListView, {
			global: {
				plugins: [store],
			},
		})
		expect(wrapper.text()).toContain("Add a new task")
	})
})
