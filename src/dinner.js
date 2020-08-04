import React from 'react'
function Dinner(props){
    return(
        <div>
            <h1>My first name is {props.firstName}</h1>
            <h1>My surname is {props.surName}</h1>
        </div>
    );
}

export default Dinner;