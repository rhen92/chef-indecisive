import React from 'react';
import './Favorites.css';
import FavoriteRecipeCard from '../FavoriteRecipeCard/FavoriteRecipeCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Favorites = ({ favorites, deleteRecipe }) => {
  let id = 1;
  const favoriteRecipeCards = favorites.map(favorite => {
    return (
      <FavoriteRecipeCard
       key={id++}
       label={favorite.label}
       image={favorite.image}
       source={favorite.source}
       serves={favorite.yield}
       ingredients={favorite.ingredients}
       calories={favorite.calories}
       cuisineType={favorite.cuisineType}
       url={favorite.url}
       deleteRecipe={deleteRecipe}
       />
    )
  })

  return (
    <React.Fragment>
    <Link to='/'>
      <button className='button-styling'>Go back to Home</button>
    </Link>
      {favoriteRecipeCards}
    </React.Fragment>
  )
}

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array,
  deleteRecipe: PropTypes.func
}
