import './App.css';
import React, { Component } from 'react';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

class App extends Component {
  state = {
    burgerIngredients: []
  } 

  clearBurger = () => {
    this.setState({burgerIngredients:[]})
  }

  addToBurger = (ingredient) => {
    let newBurgerList = this.state.burgerIngredients
    newBurgerList.unshift(ingredient)
    this.setState({
      burgerIngredients: newBurgerList
    })
  }

  render() { 
    return (
      <>
      <h1>BurgerStacker</h1>
      <main>
        <IngredientList 
          ingredients={this.props.ingredientsList}
          addToBurger={this.addToBurger}
        />
        <BurgerPane 
          burgerIngredients={this.state.burgerIngredients}
          clearBurger={this.clearBurger}
        />
      </main>
      </>
    );
  }
}
 
export default App;