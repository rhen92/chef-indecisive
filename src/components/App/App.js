import React, { Component } from 'react';
import './App.css';
import { getRecipes } from '../../api-calls';
import Recipes from '../Recipes/Recipes';
import NavBar from '../NavBar/NavBar';
import Favorites from '../Favorites/Favorites';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      randomRecipe: null,
      favoriteRecipes: [],
      showMessage: false,
      onFavoritesPage: false,
      error: ''
    }
  }

  componentDidMount = () => {
    getRecipes()
      .then(data => {
        const updatedRecipes = data.hits.reduce((obj, hit) => {
          let recipeInfo = {
            'label': hit.recipe.label,
            'image': hit.recipe.image,
            'source': hit.recipe.source,
            'url': hit.recipe.url,
            'yield': hit.recipe.yield,
            'ingredients': hit.recipe.ingredientLines,
            'calories': hit.recipe.calories,
            'cuisineType': hit.recipe.cuisineType
          }
          obj.push(recipeInfo)
          return obj;
        }, []);
        this.setState({recipes: updatedRecipes});
        this.changeRecipe()
      })
    .catch(error => this.setState({error: 'Something is wrong'}))

  }

  changeRecipe = () => {
    const differentRecipe = this.state.recipes[Math.floor(Math.random() * this.state.recipes.length)];
    this.setState({randomRecipe: differentRecipe, showMessage: false})
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  favoriteRecipe = () => {
    !this.state.favoriteRecipes.includes(this.state.randomRecipe) ?
    this.setState({favoriteRecipes: [...this.state.favoriteRecipes, this.state.randomRecipe], showMessage: true}) :
    this.setState({favoriteRecipes: [...this.state.favoriteRecipes]})
  }

  updatePage = () => {
    this.setState({onFavoritesPage: !this.state.onFavoritesPage})
  }

  render() {
    return (
      <main>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <section className="App">
              <NavBar favoritePage={this.updatePage} />
              <Recipes randomRecipe={this.state.randomRecipe} whichPage ={this.state.onFavoritesPage} favoriteRecipe={this.favoriteRecipe} showMessage={this.state.showMessage} changeRecipe={this.changeRecipe} error={this.state.error} />
            </section>
          )
        }} />
        <Route path="/favoriteRecipes" render={() => {
          return <Favorites favorites={this.state.favoriteRecipes} changePage={this.updatePage} whichPage ={this.state.onFavoritesPage} />
        }} />
      </Switch>
      </main>
    );
  }
}

export default App;
