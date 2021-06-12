Cypress.Commands.add('interceptRecipes', () => {
  cy.fixture('../fixtures/allRecipes.json')
    .then(json => {
      cy.intercept('https://api.edamam.com/search?q=vegetarian&app_id=3eafd667&app_key=0be9bcadcee0d343f2134be2a669f875&from=0&to=100&mealType=dinner', json)
    })
})
