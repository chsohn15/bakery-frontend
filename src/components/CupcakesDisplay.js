import React, { useState, useEffect } from 'react';

function CupcakesDisplay(props){
    
    useEffect( () => {
        console.log(props)
      });

    return(
        <div>
           Display cupcakes here
        </div>
    )
}

export default CupcakesDisplay; 