import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
    state = {  } 
    render() {
            const ingredients = this.props.ingredients.map(ingredient=> {
                return (
                    <Ingredient 
                        ingredient={ingredient}
                        addToBurger={this.props.addToBurger}
                    />)
            })

        return (
        <section className='ingredient-list'>
            <h1>Ingredient List</h1>
            {ingredients}
        </section>
        );
    }
}
 
export default IngredientList;