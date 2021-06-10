import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ favoritePage }) => {
  return (
    <header>
      <h1>Chef Indecisive</h1>
      <Link to={'/favoriteRecipes'}>
      <button className='button-styling' onClick={event => favoritePage()}>Head to Favorites</button>
      </Link>
    </header>
  )
}

export default NavBar;
