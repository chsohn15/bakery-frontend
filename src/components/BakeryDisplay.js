import React, { useState, useEffect } from 'react';
import Bakery from './Bakery.js';

function BakeryDisplay(){
    const [bakeries, setBakeries] = useState([]);
    
    useEffect( () => {
        fetch("https://cupcake-bakery.herokuapp.com/stores")
        .then(res => res.json())
        .then(bakeries => setBakeries(bakeries))
      });

    return(
        <div>
           {bakeries.map(bakery => <Bakery bakery={bakery}/>)}
        </div>
    )
}

export default BakeryDisplay; 