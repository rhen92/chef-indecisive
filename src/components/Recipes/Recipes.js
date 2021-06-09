import React from 'react';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import './Recipes.css';

const Recipes = ({ recipes }) => {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  const randomRecipeInfo = randomRecipe.map(recipe => {
    return (
      <RecipeDetails
        name={recipe.label}
        image={recipe.image}
        source={recipe.source}
        amount={recipe.yield}
        ingredients={recipe.ingredients}
        calories={recipe.calories}
        cuisineType={recipe.cuisineType}
        link={recipe.url}
        />
    )
  })

  return (
    <div>
      {randomRecipeInfo}
    </div>
  )
}

export default Recipes;
