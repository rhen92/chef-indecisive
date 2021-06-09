import React from 'react';
import './Recipes.css';

const Recipes = ({ recipes, error }) => {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    return recipes.length ? (
      <article>
        <h2>{randomRecipe.label}</h2>
        <img src={randomRecipe.image} alt={randomRecipe.label} />
        <p>{randomRecipe.source}</p>
        <p>{randomRecipe.yield}</p>
        <ul>
          <li>{randomRecipe.ingredients.map(ingredient => ingredient)}</li>
        </ul>
        <p>{randomRecipe.calories}</p>
        <p>{randomRecipe.cuisineType}</p>
        <p>{randomRecipe.url}</p>
      </article>
    ) : <h2>Loading recipe...</h2>
}

export default Recipes;
