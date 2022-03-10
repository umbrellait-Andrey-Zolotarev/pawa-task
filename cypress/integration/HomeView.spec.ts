// https://docs.cypress.io/api/introduction/api.html

describe('/', () => {
	it('visits the app home url', () => {
		cy.visit('/')
		cy.contains('div', 'PawaTask')
	})
})
