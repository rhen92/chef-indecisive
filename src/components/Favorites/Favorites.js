import React from 'react';
import './Favorites.css';
import Recipes from '../Recipes/Recipes';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites, whichPage, changePage }) => {
  const favoriteRecipeCards = favorites.map(favorite => {
    return (
      <Recipes randomRecipe={favorite} whichPage={whichPage}/>
    )
  })

  return (
    <div className='favorite-page'>
    <Link to='/'>
      <button className='button-styling' onClick={event => changePage()}>Go back to Home</button>
    </Link>
    <div className='favorites-grid'>
      {favoriteRecipeCards}
    </div>
    </div>
  )
}

export default Favorites;
