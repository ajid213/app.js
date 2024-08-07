import React, { useState } from "react";
import Child from './Child';

function State(){
    const [Count,setcount]=useState(0);
    const handleIncrement=()=>{
        setcount(Count +1);

    }
    const handleDecrement=()=>{
        setcount(Count -1);

    }
    return(
        <div>
            <h1>count:{Count}</h1>
            <Child onIncrement={handleIncrement}onDecrement={handleDecrement}count={Count}></Child>
             <h1>count:{Count}</h1>
             <Child onDcrement={handleDecrement}onDecrement={handleDecrement}count={Count}></Child>

        </div>
    );
}
export default State;
