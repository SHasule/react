
import React from 'react'

const List = (props) => {
    const num = [1, 2, 3, 4]
    const usemap = num.map((item,index) => <p key={index}>{item} index is {index}</p>)
    return (
        <div className='list1'>
            <p>list</p>
            {/* {num.map((item)=><p>{item}</p>)} */}
           <ul>
           
           <li>{usemap}</li>
           </ul>

        </div>
    )
}

export default List
