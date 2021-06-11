import React from 'react';
import './FavoriteRecipeCard.css';

const FavoriteRecipeCard = ({ label, image, source, serves, ingredients, calories, cuisineType, url, deleteRecipe }) => {
  return (
    <article className='favorite-card'>
      <i className='fas fa-times-circle' aria-role='delete button' onClick={() => deleteRecipe(label)} />
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
