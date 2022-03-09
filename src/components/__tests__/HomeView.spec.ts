import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { store } from "@/store"
import HomeView from "@/views/TaskListView.vue"

describe("HomeView", () => {
	it("renders properly", () => {
		const wrapper = mount(HomeView, {
			global: {
				plugins: [store],
			},
		})
		expect(wrapper.text()).toContain("Add a new task")
	})
})
