import React from 'react';
import './Favorites.css';
import Recipes from '../Recipes/Recipes'

const Favorites = ({ favorites }) => {
  const favoriteRecipeCards = favorites.map(favorite => {
    return (
      <Recipes randomRecipe={favorite}/>
    )
  })

  return (
    <React.Fragment>
    <button className='button-styling'>Go back to Home</button>
    <div className='favoritesGrid'>
      {favoriteRecipeCards}
    </div>
    </React.Fragment>
  )
}

export default Favorites;
