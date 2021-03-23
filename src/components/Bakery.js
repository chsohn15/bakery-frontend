import React from 'react';

function Bakery(props){
    
    let {name, location, desserts} = props.bakery

    let handleClick = ()=> {
        console.log(desserts)
    }

    return(
        <div>
           <h3 onClick={handleClick}>{name}</h3>
           <div>{location}</div>
        </div>
    )
}

export default Bakery; 

//https://github.com/chsohn15/hp_writing_app_frontend/blob/master/src/components/userPage/CompletedActivityLink.js