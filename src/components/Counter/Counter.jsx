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

        </div>
    )
}

export default Counter;