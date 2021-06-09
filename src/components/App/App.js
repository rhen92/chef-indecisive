import React, { Component } from 'react';
import './App.css';
import { getRecipes } from '../../api-calls';
import Recipes from '../Recipes/Recipes';
import NavBar from '../NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
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

      })
    .catch(error => this.setState({error: 'Something is wrong'}))

  }

  render() {
    return (
      <main>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <section className="App">
              <NavBar />
              <Recipes recipes={this.state.recipes} error={this.state.error} />
            </section>
          )
        }} />
      </Switch>
      </main>
    );
  }
}

export default App;
