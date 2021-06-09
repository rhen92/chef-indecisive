import React, { Component } from 'react';
import './App.css';
import { getRecipes } from '../../api-calls';
import Recipes from '../Recipes/Recipes';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: null,
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const obtainRecipes = await getRecipes();
      const updatedRecipes = obtainRecipes.hits.reduce((obj, hit) => {
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
    } catch (e) {
      this.setState({error: 'Unable to get your recipe'})
    }
  }

  render() {
    return (
      <React.Fragment>
      <Switch>
      {this.state.error && <h2>{this.state.error}</h2>}
      {!this.state.recipes && <h2>Loading recipe...</h2>}
        <Route exact path="/" render={() => {
          return (
            <main className="App">
              <h1>Chef Indecisive</h1>
              <Recipes recipes={this.state.recipes} />
            </main>
          )
        }} />
      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
