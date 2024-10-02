
import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
    const [count2, setcount2] = useState(0)

    function increment(){
        setcount(count+1)
    }
    function decrement(){
        setcount2(count2-1)
    }
    // function isEven(){
    //     for( let i=0;i<=1000000000;i++){
    //     }
    //       return count%2===0;
    // }
       
    const isEven = useMemo(()=>{
        for (let i=0;i<100000000;i++){}
        return count%2===0;
    },[count])
       

       
    return (
        <div>

            <button onClick={increment}>count one  {count}</button>
           {isEven?'even':'odd' } <br /> even /add <br />
            <button onClick={decrement}>count two {count2}</button>
            {/* {isEven2()?'even':'odd' }  */}

        </div>
    )
}

export default Counter
