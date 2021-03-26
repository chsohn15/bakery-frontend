import React from 'react';

function BakeryName(props){
    
    const {name} = props.bakery

    return(
        <div>
            {name}
        </div>
    )
}

export default BakeryName; 