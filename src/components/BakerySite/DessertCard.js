import React, { useEffect } from 'react';

function DessertCard(props){

    useEffect(() => {
        console.log("Here is a dessert: ", props.dessert)
    })

    const dessert = props.dessert

    return(
        <div>
           One Dessert 
        </div>
    )
}

export default DessertCard; 