import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum + country.population,0);
    // let population = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     population = population + country.population; 
    // }
    return (
        <div>
            <h2>Country added: {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;