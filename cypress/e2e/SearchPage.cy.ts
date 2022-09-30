describe('Request', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Takes you to the search page when a value is entered in the input and the form submitted', () => {
    const input = "dogs"
    cy.get('input')
    .type(input)
    .type('{enter}')
      cy.location('pathname').should('equal', '/search/dogs')
  })
  it('Renders a list of videos after the search query is submitted', () => {
    const input = "cats"
    cy.get('input')
    .type(input)
    .type('{enter}')
      .get('.video-row')
  })

})
