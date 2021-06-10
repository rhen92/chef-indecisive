import React from 'react';
import './Recipes.css';
import Ingredients from '../Ingredients/Ingredients';

const Recipes = ({ recipes, error }) => {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    return recipes.length ? (
      <article className='recipe-card'>
        <h2>{randomRecipe.label}</h2>
        <img className='food-pic' src={randomRecipe.image} alt={randomRecipe.label} />
        <p><b>Recipe Source:</b> {randomRecipe.source}</p>
        <p><b>Serves:</b> {randomRecipe.yield}</p>
        <p><b>Ingredients:</b></p>
        <Ingredients ingredients={randomRecipe.ingredients} />
        <p><b>Calories:</b> {Math.round(randomRecipe.calories)}</p>
        <p><b>Cuisine Type:</b> {randomRecipe.cuisineType}</p>
        <a href={randomRecipe.url} target='_blank' rel='noreferrer'>Click here to open the recipe in a new tab</a>
        <div>
          <button className='button-styling'>Show Different Recipe</button>
          <button className='button-styling'>Favorite Recipe</button>
        </div>
      </article>
    ) : <h2>Loading recipe...</h2>
}

export default Recipes;
