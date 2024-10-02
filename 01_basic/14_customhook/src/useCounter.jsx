import { useState } from "react";

const useCounter = (i=0) => {
    const [count, setCount] = useState(i);
    const increment=()=>{
     setCount(count+1)
 
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return [count,increment,decrement]
 
}

export default useCounter
