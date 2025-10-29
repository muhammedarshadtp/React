import { useEffect, useState } from "react";

const Timer =()=>{
    const [count,setCount] =useState(0)

    useEffect(()=>{

        let intervel = setInterval(() => {
          setCount((prev)=>{
            if(prev <10){
                return prev +1
            }else{
                clearInterval(intervel)
                return prev
            }
          })

            
            
        }, 1000);

        return ()=>{
            clearInterval(intervel)
            console.log("Intervel");
        }

    },[])

    return(
        <>
        <h1>{count}</h1>
        </>
    )
}

export default Timer;