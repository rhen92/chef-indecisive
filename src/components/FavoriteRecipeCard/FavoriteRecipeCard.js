import React from 'react';
import './FavoriteRecipeCard.css';
import PropTypes from 'prop-types';

const FavoriteRecipeCard = ({ label, image, source, serves, ingredients, calories, cuisineType, url, deleteRecipe }) => {
  return (
    <article className='favorite-card'>
      <i className='fas fa-times-circle' aria-label='delete button' onClick={() => deleteRecipe(label)} />
      <div>
        <img className='favorite-food-pic' src={image} alt={label} />
      </div>
        <h2>{label}</h2>
        <p><b>Recipe Source:</b> {source}</p>
        <p><b>Serves:</b> {serves}</p>
        <p><b>Ingredients:</b> {ingredients.join(',')}</p>
        <p><b>Calories:</b> {Math.round(calories)}</p>
        <p><b>Cuisine Type:</b> {cuisineType}</p>
      <a href={url} target='_blank' rel='noreferrer'>Click here to open the recipe in a new tab</a>
    </article>
  )
}

export default FavoriteRecipeCard;

FavoriteRecipeCard.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string,
  source: PropTypes.string,
  serves: PropTypes.number,
  ingredients: PropTypes.array,
  calories: PropTypes.number,
  cuisineType: PropTypes.array,
  url: PropTypes.string,
  deleteRecipe: PropTypes.func,
}
