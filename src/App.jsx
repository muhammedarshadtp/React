import { createContext, useState } from "react"
import Count from "./components/count"
import Home from "./components/home"
import List from "./components/list"
import ThemeDisplay from "./components/themeDisplay"

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme]=useState("light")

const ToggleTheme =()=>{
  setTheme((prevTheme)=> (prevTheme=== "light" ? "Dark":"light"))
}

  return (
    <ThemeContext.Provider value={theme}>
    <div>

    <h1 >Hello World</h1>

    <h2>current Theme:{theme}</h2>
    <button onClick={ToggleTheme}>Toggle Theme </button>
    
    <List/>
    <Count/>
    <ThemeDisplay/>
    </div>
    </ThemeContext.Provider>
    
  )
}

export default App
