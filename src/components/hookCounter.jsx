import { useEffect, useState } from "react"


const HooksCounter=()=>{
    const [count,setCount]=useState(0)

    useEffect(()=>{
        document.title = `You clicked ${count} times`;

    },[count])
    return(
        <div>
            <button className="bg-blue-400 text-1xl rounded-3xl" onClick={()=> setCount((setPrev)=> setPrev +1)}>
               Click {count} times
            </button>

        </div>
    )
}

export default HooksCounter
