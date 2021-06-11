import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => {
  let id = 0
  const listOfIngredients = ingredients.map(ingredient => {
    return (
      <ul key={id++}>
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

Ingredients.propTypes = {
  ingredients: PropTypes.array
}
