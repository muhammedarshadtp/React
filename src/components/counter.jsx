import { useReducer } from "react";


const counderReducer=(state,action)=>{
        switch (action.type) {
            case "increment":
                return {count: state.count +1}
            case "decrement":
                return {count: state.count > 0 ? state.count -1:0}
        
            default:
                return state
                
        }

    }
const Counter =()=>{
    const [state,dispatch]=useReducer(counderReducer,{count : 0})
    return(
        <div>
            <button onClick={()=> dispatch({type:"increment"})}>
        Increment
            </button>
            <h1>count:{state.count}</h1>
            <button onClick={()=> dispatch({type:"decrement"})}>
        Decrement
            </button>


        </div>
    )

}

export default Counter;