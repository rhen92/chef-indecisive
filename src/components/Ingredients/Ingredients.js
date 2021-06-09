import React from 'react';

const Ingredients = ({ ingredients }) => {
  const listOfIngredients = ingredients.map(ingredient => {
    return (
      <ul>
      <li>{ingredient}</li>
      </ul>
    )
  })
  return (
    <>
      {listOfIngredients}
    </>
  )
}

export default Ingredients;
