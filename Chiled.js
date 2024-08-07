import React from "react";
function Child(props){
    return(
        <>
        <button onClick={props.onIncrement}>increment</button>
        <button onClick={props.onDecrement}>Decrement</button>
        <h1>value of count is {props.count}</h1>
        </>
    );
}
export default Child;
