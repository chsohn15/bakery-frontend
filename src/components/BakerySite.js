import React, { useState, useEffect } from 'react';

function BakerySite(props){
    
    useEffect( () => {
        console.log(props)
      });

    return(
        <div>
           This is one bakery's site
        </div>
    )
}

export default BakerySite; 