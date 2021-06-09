import React, { Component } from 'react';
import './App.css';
import { getRecipes } from '../../api-calls';

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
      console.log(this.state.recipes)
    } catch (e) {
      this.setState({error: 'Unable to get your recipe'})
    }
  }

  render() {
    return (
      <main className="App">
      <h1>Hello</h1>
      </main>
    );
  }
}

export default App;
