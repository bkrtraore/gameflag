import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = () => {
    //Utilisation de hook
    const [data, setData] = useState(['Hello'])
    //Use effect pour la performance

    useEffect(() => {
        axios.
        get('https://restcountries.com/v3.1/all?fields=name;population;region;capital;flag').then((res) => setData(res.data));
    
        console.log(data);
    }, []); //=> Ne se joue qu'une seule fois sauf si le iseState a bouger
    

    return <div></div>
};

export default Countries;