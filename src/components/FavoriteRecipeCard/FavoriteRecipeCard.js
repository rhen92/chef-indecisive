import React from 'react';
import Ingredients from '../Ingredients/Ingredients';

const FavoriteRecipeCard = ({ label, image, source, serves, ingredients, calories, cuisineType, url, deleteRecipe }) => {
  return (
    <article>
    <i className='fas fa-times-circle' onClick={() => deleteRecipe(label)} />
    <h2>{label}</h2>
    <img className='food-pic' src={image} alt={label} />
    <p><b>Recipe Source:</b> {source}</p>
    <p><b>Serves:</b> {serves}</p>
    <p><b>Ingredients:</b></p>
    <Ingredients ingredients={ingredients} />
    <p><b>Calories:</b> {Math.round(calories)}</p>
    <p><b>Cuisine Type:</b> {cuisineType}</p>
    <a href={url} target='_blank' rel='noreferrer'>Click here to open the recipe in a new tab</a>
    </article>
  )
}

export default FavoriteRecipeCard;
