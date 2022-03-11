import React, { Component } from 'react';

class Ingredient extends Component {
    state = {  } 
    render() { 
        return (
            <div 
                className='ingredient'
                onClick={()=>{
                    this.props.addToBurger(this.props.ingredient)
                }} 
            >
                <p>{this.props.ingredient.name}</p>
            </div>
        );
    }
}
 
export default Ingredient;