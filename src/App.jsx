import Home from "./components/home"
import List from "./components/list"


function App() {
const style={
  display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
}

  return (
    
    <>
    <h1 >Hello World</h1>
    {/* <Home appStyle={style} /> */}
    <List/>
    </>
    
  )
}

export default App
