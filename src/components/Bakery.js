import React from 'react';

function Bakery(props){
    
    let {name, location} = props.bakery
    return(
        <div>
           <h3>{name}</h3>
           <div>{location}</div>
        </div>
    )
}

export default Bakery; 