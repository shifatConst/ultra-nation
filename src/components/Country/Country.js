import React from 'react';

const Country = (props) => {
    
    const {name, flag, population, region}= props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {height: '50px'}
    const countryStyle= {border: '1px solid red', margin: '10px', padding: '10px'}
    return (
        <div style={countryStyle}>
            <h2>Country name: {name}</h2>
            <img style= {flagStyle} src={flag} alt=""/>
            <p><small>Population: {population}</small></p>
            <p>Region: {region}</p>
            <button onClick= {() => handleAddCountry(props.country)}> Add country </button>
        </div>
    );
};

export default Country;