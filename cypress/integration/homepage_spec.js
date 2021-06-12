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

  it('should show recipe', () => {
    cy.wait(1000)
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
      .get('p').eq(2).contains('Ingredients')
      .get('li').eq(0).invoke('text')
      .then((text1) => {
        cy.get('li').eq(0).contains(text1)
      })
      .get('li').eq(1).invoke('text')
      .then((text1) => {
        cy.get('li').eq(1).contains(text1)
      })
      .get('li').eq(2).invoke('text')
      .then((text1) => {
        cy.get('li').eq(2).contains(text1)
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
      .get('button').eq(1).contains('Show Different Recipe')
      .get('button').eq(2).contains('Favorite Recipe')
  })

  it('should show a different recipe when show different recipe button is clicked', () => {
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

  it('should show hidden message when favorite recipe button is clicked', () => {
    cy.wait(1000)
      .get('button').eq(2).click()
      .get('p').eq(5).contains('This recipe has been added to your favorites list...now get cooking!')
  })

  it('should redirect user if type in incorrect url path', () => {
    cy.visit('http://localhost:3000/gajksdgajsdhgk')
      .url().should('eq', 'http://localhost:3000/')
      .get('h1').contains('Chef Indecisive')
      .get('button').eq(0).contains('Head to Favorites')
      .wait(1000)
      .get('h2').invoke('text')
      .then((text1) => {
        cy.get('h2').contains(text1)
      })
  })
})
