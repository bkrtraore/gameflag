import React from 'react';

const Card = (props) => {
    const {country} = props;
    // <=> const country = props.country 
    return (
        <li classname="card">
            <img src={country.flag} alt='flag'/>
            <div className='data-container'>
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>{country.population}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;