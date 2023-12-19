import React from 'react';
import './buttons.css';

function Button(props){

    const isOperator = value =>{  
        return isNaN(value) && value !== "." && value !== "=";
    
    }

    return(
        <div className={`boton ${isOperator(props.children)? 'operador':'null'}`}>
            {props.children}
        </div>
    )

}

export default Button;