import React, { useEffect } from 'react';

function DessertCard(props){

    useEffect(() => {
        console.log("Here is a dessert: ", props.dessert)
    })

    const {image_url, name, price, variety} = props.dessert

    return(
        <div>
           <img src={image_url} style={{width:"200px"}} />
           <div>{name}</div>
           <div>{price} </div>
        </div>
    )
}

export default DessertCard; 