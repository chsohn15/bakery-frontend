import React from 'react';
import { NavLink } from "react-router-dom";

function Bakery(props){
    
    let {id, name, location, desserts} = props.bakery

    return(
        <div>
            <NavLink to={{pathname: `/${id}/`}}>{name}</NavLink>
           <div>{location}</div>
        </div>
    )
}

export default Bakery; 

//https://github.com/chsohn15/hp_writing_app_frontend/blob/master/src/components/userPage/CompletedActivityLink.js