import React, { Component } from 'react';
import Clear from './Clear';
import Ingredient from './Ingredient';

class BurgerPane extends Component {
    state = {  } 
    render() { 
        const burger = this.props.burgerIngredients.map(layer=> {
            return < Ingredient ingredient={layer} />
        })

        return (
            <section className='burger-pane'>
                <h1>Burger Pane</h1>
                {burger}
                <Clear clearBurger={this.props.clearBurger}/>
            </section>
        );
    }
}
 
export default BurgerPane;