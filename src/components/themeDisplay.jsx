import { useContext } from "react";
import { ThemeContext } from "../App";

const ThemeDisplay=()=>{
    const theme = useContext(ThemeContext)
    return(
        <div> 
            <h1>Theme form Context:{theme}</h1>
        </div>
    )
}

export default ThemeDisplay;