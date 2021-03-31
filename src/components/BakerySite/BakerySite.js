import React, { useState, useEffect } from 'react';
import BakeryName from './BakeryName.js'
import DessertDisplay from './DessertDisplay.js'

function BakerySite({match, location}){
    // Maybe use fetch instead of props later
    //useEffect( () => {
        const {id, name, desserts} = location.bakery
        const storeLocation = location.bakery.location
        //console.log(id, name, desserts)
      //});

    return(
        <div>
           This is one bakery's info page
           <BakeryName bakery={location.bakery}/>
           <DessertDisplay desserts={desserts}/>
        </div>
    )
}

export default BakerySite; 