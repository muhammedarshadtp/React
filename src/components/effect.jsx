import { useLayoutEffect } from "react";
import { useEffect } from "react";

const Effect =()=>{

    useEffect(()=>{console.log("This is useEffect");},[])
    useLayoutEffect(()=>{console.log("This is useLayoutEffect");},[])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Effect;