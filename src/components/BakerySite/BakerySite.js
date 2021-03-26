import React, { useState, useEffect } from 'react';
import BakeryName from './BakeryName.js'

function BakerySite({match, location}){
    
    useEffect( () => {
        const {id, name, desserts} = location.bakery
        const storeLocation = location.bakery.location
        console.log(id, name, desserts)
      });

    return(
        <div>
           This is one bakery's info page
           <BakeryName bakery={location.bakery}/>
        </div>
    )
}

export default BakerySite; 