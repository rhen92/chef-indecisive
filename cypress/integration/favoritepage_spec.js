describe('Favorite Page', () => {
  beforeEach(() => {
    cy.interceptRecipes()
      .visit('http://localhost:3000')
  })

  it('should show url change when going to Favorite Page', () => {
    cy.get('button').eq(0).click()
      .url().should('eq', 'http://localhost:3000/favoriteRecipes')
      .get('button').contains('Go back to Home')
  })

  it('should go back to home when button is clicked', () => {
    cy.get('button').eq(0).click()
      .get('button').click()
      .url().should('eq', 'http://localhost:3000/')
  })
})
