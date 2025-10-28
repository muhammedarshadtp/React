import { useState } from "react";

const Count =()=>{
    const [count,setCount]=useState(0)
    const increment = ()=> setCount(count + 1)
    const dicrement =()=> count > 0 ? setCount(count -1 ) :0
    
    return(
        <div>
           <button onClick={increment}>
        increment
           </button>
            <h1>Count:{count} </h1>
             <button onClick={dicrement}>
        dicrement
           </button>

        </div>
    )
}

export default Count;