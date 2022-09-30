/* eslint-disable */
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000')

  })
  it('renders Header component', () => {
    cy.get('.header').contains('Youtube')
  })
  it('renders SideBar component and trending videos section', () => {
    cy.contains('Music')
    cy.contains('News')
    cy.contains('Movies')
    cy.contains('Sports')
  })
  it('accepts input', () => {
    const inputData = "Manchester United"
    cy.get('input')
      .type(inputData)
      .should('have.value', inputData)
  })
  it('renders a list of 10 videos from most popular category', () => {
    cy.get('.most-popular').should('have.length', 10)
  })


})
