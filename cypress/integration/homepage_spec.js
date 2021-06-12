describe('Home Page', () => {
  beforeEach(() => {
    cy.interceptRecipes()
      .visit('http://localhost:3000')
  })

  it('should show navbar', () => {
    cy.get('h1').contains('Chef Indecisive')
      .get('button').eq(0).contains('Head to Favorites')
  })

  it('should show loading recipe when fetching data', () => {
    cy.get('h2').contains('Loading recipe...')
  })

  it('should show a different recipe show different recipe button is clicked', () => {
    cy.wait(1000)
      .get('h2').invoke('text')
      .then((text1) => {
        cy.get('button').eq(1).click()
          .get('h2').invoke('text')
          .should((text2) => {
            expect(text1).not.to.eq(text2)
          })
      })
  })

})
