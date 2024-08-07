import React, { useState } from "react";
function Counter(){
    const [count,setCount]= useState(0);  
 
    function increment(){
        setCount(count + 2);

    }
    function decrement(){
        setCount(count - 2);
            
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Counter;

