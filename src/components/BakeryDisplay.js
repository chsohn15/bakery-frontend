import React, { useState, useEffect } from 'react';

function BakeryDisplay(){
    const [bakeries, setBakeries] = useState([]);
    
    useEffect( () => {
        fetch("https://cupcake-bakery.herokuapp.com/stores")
        .then(res => res.json())
        .then(bakeries => console.log(bakeries))
      });

    return(
        <div>
            Display bakeries here
        </div>
    )
}

export default BakeryDisplay; 