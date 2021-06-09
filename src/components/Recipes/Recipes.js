import React from 'react';
import './Recipes.css';
import Ingredients from '../Ingredients/Ingredients';

const Recipes = ({ recipes, error }) => {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    return recipes.length ? (
      <article>
        <h2>{randomRecipe.label}</h2>
        <img src={randomRecipe.image} alt={randomRecipe.label} />
        <p>{randomRecipe.source}</p>
        <p>{randomRecipe.yield}</p>
        <p><b>Ingredients:</b></p>
        <Ingredients ingredients={randomRecipe.ingredients} />
        <p>{randomRecipe.calories}</p>
        <p>{randomRecipe.cuisineType}</p>
        <a href={randomRecipe.url} target="_blank">Click here to open the recipe in a new tab</a>
      </article>
    ) : <h2>Loading recipe...</h2>
}

export default Recipes;
