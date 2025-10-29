import { useMemo, useState } from "react";

const MemoExample = () => {
    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(false)

    const double = useMemo(() => {
        console.log("useMemo Calculating");
        return count * 2
    }, [count])

    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#000',
    };
    return (
        <div style={theme}>
            <h2>count:{count}</h2>
            <h3>double:{double}</h3>
            <button onClick={()=>setCount(count + 1)}>➕ Increment</button>
            <button onClick={() => setDark(!dark)}>🌓 Toggle Theme</button>

        </div>
    )
}

export default MemoExample;