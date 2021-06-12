describe('Home Page', () => {
  beforeEach(() => {
    cy.interceptRecipes()
      .visit('http://localhost:3000')
  })

  it('should show navbar', () => {
    cy.get('h1').contains('Chef Indecisive')
      .get('button').eq(0).contains('Head to Favorites')
  })
})
