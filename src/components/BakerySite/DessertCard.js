import React, { useEffect } from 'react';

function DessertCard(props){

    useEffect(() => {
        console.log("Here is a dessert: ", props.dessert)
    })

    const {image_url, name, price, variety} = props.dessert

    return(
        <div className="card__dessert">
           <img src={image_url} />
           <div>{name}</div>
           <div>{price} </div>
        </div>
    )
}

export default DessertCard; 