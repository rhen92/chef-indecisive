import React from 'react';
import './Recipes.css';
import Ingredients from '../Ingredients/Ingredients';
import PropTypes from 'prop-types';

const Recipes = ({ randomRecipe, favoriteRecipe, showMessage, changeRecipe }) => {
    return randomRecipe ? (
      <div className='card-styling'>
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
        {showMessage && <p><b>This recipe has been added to your favorites list...now get cooking!</b></p>}
        <div>
          <button className='button-styling' onClick={event => changeRecipe(event)}>Show Different Recipe</button>
          <button className='button-styling' onClick={event => favoriteRecipe(event)}>Favorite Recipe</button>
        </div>
      </article>
      </div>
    ) : <h2>Loading recipe...</h2>
}

export default Recipes;

Recipes.propTypes = {
  randomRecipe: PropTypes.object,
  favoriteRecipe: PropTypes.func,
  showMessage: PropTypes.bool,
  changeRecipe: PropTypes.func,
}

Recipes.defaultProps = {
  randomRecipe: true
}
