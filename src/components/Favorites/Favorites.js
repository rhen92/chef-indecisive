import React from 'react';
import './Favorites.css';
import FavoriteRecipeCard from '../FavoriteRecipeCard/FavoriteRecipeCard';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites, deleteRecipe }) => {
  let id = 1;
  const favoriteRecipeCards = favorites.map(favorite => {
    return (
      <FavoriteRecipeCard
       key={id++}
       label={favorite.label}
       image={favorite.image}
       source={favorite.source}
       serves={favorite.yields}
       ingredients={favorite.ingredients}
       calories={favorite.calories}
       cuisineType={favorite.cuisineType}
       deleteRecipe={deleteRecipe}
       />
    )
  })

  return (
    <React.Fragment>
    <Link to='/'>
      <button className='button-styling'>Go back to Home</button>
    </Link>
    <div className='favorites-grid'>
      {favoriteRecipeCards}
    </div>
    </React.Fragment>
  )
}

export default Favorites;
