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

  it('should allow favorite button to be clicked and show recipe in favoriteRecipes page', () => {
    cy.wait(1000)
      .get('button').eq(2).click()
      .get('button').eq(0).click()
      .get('i')
      .get('h2').invoke('text')
      .then((text1) => {
        cy.get('h2').contains(text1)
      })
      .get('img').invoke('attr', 'src')
      .then((src1) => {
        cy.get('img').should('have.attr', 'src', src1)
      })
      .get('p').eq(0).invoke('text')
      .then((text1) => {
        cy.get('p').eq(0).contains(text1)
      })
      .get('p').eq(1).invoke('text')
      .then((text1) => {
        cy.get('p').eq(1).contains(text1)
      })
      .get('p').eq(2).invoke('text')
      .then((text1) => {
        cy.get('p').eq(2).contains(text1)
      })
      .get('p').eq(3).invoke('text')
      .then((text1) => {
        cy.get('p').eq(3).contains(text1)
      })
      .get('p').eq(4).invoke('text')
      .then((text1) => {
        cy.get('p').eq(4).contains(text1)
      })
      .get('a').invoke('attr', 'href')
      .then((href1) => {
        cy.get('a').should('have.attr', 'href', href1)
          .contains('Click here to open the recipe in a new tab')
          .should('have.attr', 'target', '_blank')
          .should('have.attr', 'rel', 'noreferrer')
      })
  })
})
