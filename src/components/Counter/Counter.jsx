import "./Counter.scss";

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter+1);
    }

    const handleDecrement = () => {
        setCounter(counter-1);
    }

    return (
        <div>
            <h4>Counter</h4>
            <p>{counter}</p>
            <div>
                <p onClick={handleDecrement}>-</p>
                <p onClick={handleIncrement}>+</p>
            </div>
        </div>
    )
}

export default Counter;