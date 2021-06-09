import React from 'react';
import './RecipeDetails.css';

const RecipeDetails = ({ name, image, source, amount, ingredients, calories, cuisineType, link}) => {
  return (
    <article>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{source}</p>
      <p>{amount}</p>
      <ul>
        <li>{ingredients.map(ingredient => ingredient)}</li>
      </ul>
      <p>{calories}</p>
      <p>{cuisineType}</p>
      <p>{link}</p>
    </article>
  )
}

export default RecipeDetails;
