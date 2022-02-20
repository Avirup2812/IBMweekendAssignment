import React, { useState } from "react";

function Example({ }) {
    const [count, setCount] = useState(0);

    return (
        <>
            Count value: {count}<div>
                <button onClick={() => setCount(prevCount => prevCount * 0)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button></div>
        </>
    );
}
export default Example