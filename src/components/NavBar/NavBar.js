import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <h1>Chef Indecisive</h1>
      <Link to={'/favoriteRecipes'}>
      <button className='button-styling'>Head to Favorites</button>
      </Link>
    </header>
  )
}

export default NavBar;
