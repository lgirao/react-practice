import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    }
    const addThree = () => {
        setCount((currentCount) => currentCount +1);
        setCount((currentCount) => currentCount +1);
        setCount((currentCount) => currentCount +1);
    }
    const setToTen = () => {
        setCount(10);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>Set To 10</button>
        </div>
    )

    // const [num, setNum] = useState(0);

    // const changeNum = () => {
    //     setNum(num + 1);
    // }
    // return (
    //     <div>
    //         <p>The count is: {num}</p>
    //         <button onClick={changeNum}>Increment</button>
    //     </div>
    // );
}