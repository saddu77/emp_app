import React from 'react';

function MyList(props){
    const names = ['John','Jimmy','Joe'];
    const updatedNames = names.map((myname,index) => 
        <li key={index}>{index}{myname}</li>
    )
    return(    
        <ul>{updatedNames}</ul>      
       )
}

export default MyList