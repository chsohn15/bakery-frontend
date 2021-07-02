import React, { useState, useEffect } from 'react';
import DessertCard from './DessertCard.js'

function DessertDisplay(props){
    const desserts = props.desserts

    return(
        <div className = "card-display">
            {desserts.map(dessert => <DessertCard dessert={dessert}/>)}
        </div>
    )
}

export default DessertDisplay; 