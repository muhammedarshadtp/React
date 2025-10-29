import { createContext, useState } from "react"
import Count from "./components/count"
import List from "./components/list"
import ThemeDisplay from "./components/themeDisplay"
import './App.css'
import HooksCounter from "./components/hookCounter"
import Timer from "./components/timer"
import Counter from "./components/counter"
import SwitchLight from "./components/switchLight"
import Effect from "./components/effect"
import MemoExample from "./components/memoExample"

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme]=useState("light")

const ToggleTheme =()=>{
  setTheme((prevTheme)=> (prevTheme=== "light" ? "Dark":"light"))
}

  return (
    <ThemeContext.Provider value={theme}>
    <div>

    <h1 className="text-3xl bg-red-500 font-bold underline" >Hello World</h1>
    <p className="text-3xl">hello</p>

    <h2>current Theme:{theme}</h2>
    <button onClick={ToggleTheme}>Toggle Theme </button>
    
    <List/>
    <Count/>
    <ThemeDisplay/>

    <div className="">
      <HooksCounter/>
      <Timer/>
    </div>
    <Counter/>
    <div>
      <SwitchLight/>
    </div>
    <Effect/>
    <div className="p-5 m-3 flex ">
    <MemoExample/>
    </div>
    </div>
    </ThemeContext.Provider>
    
  )
}

export default App
