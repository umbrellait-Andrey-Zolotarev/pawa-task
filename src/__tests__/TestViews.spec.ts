import { describe, expect, it } from "vitest"

import { store } from "@/store"
import TaskListView from "@/views/TaskListView.vue"
import { mount } from "@vue/test-utils"

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
