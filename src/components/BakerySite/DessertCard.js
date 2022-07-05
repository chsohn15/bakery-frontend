import React, { useEffect } from 'react';

function DessertCard(props){

    useEffect(() => {
        console.log("Here is a dessert: ", props.dessert)
    })

    const {image_url, name, price, variety} = props.dessert

    return(
        <div className="card__dessert" >
            <div className="container" >
                <img src={image_url} />
                <div>{name}</div>
                <div>{price} </div>
                <button>-</button><button>+</button>
           </div>
        </div>
    )
}

export default DessertCard; 