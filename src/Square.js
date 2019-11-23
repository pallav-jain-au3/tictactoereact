import React from 'react';
import './Square.css'

const Square = (props) => {
    let classes = "square " + (props.highlight ? "highlight" : "")  
    return (
        <button  className = {classes} onClick = {props.onClick}> {props.value} </button>
        );
}
 
export default Square;