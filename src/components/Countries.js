import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    //Utilisation de hook
    const [data, setData] = useState(['Hello'])
    //Use effect pour la performance

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name;population;region;capital;flag').then((res) => setData(res.data));
    }, []); //=> Ne se joue qu'une seule fois sauf si le useState (Hook) a bouger
   
    return (
        <div className='countries'>
            <ul className='countries-list'>
                {data.map((country) => (
                    <Card country={country} key={country.name}/>
                ))}  
            </ul>
        </div>
    )
};

export default Countries;