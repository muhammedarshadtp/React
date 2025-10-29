import { useReducer } from "react";

const lightSwitch = (state, action) => {
    switch (action.type) {
        case 'TOGGLE' :
            return { isOn: !state.isOn }

        default:
            return state;
    }
}

const SwitchLight = () => {
    const [state, dispatch] = useReducer(lightSwitch, { isOn: false })
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>The light is {state.isOn ? '💡 ON' : '🌑 OFF'}</h2>
            <button onClick={() => dispatch({ type: 'TOGGLE' })}>
                Toggle Light
            </button>


        </div>
    )
}

export default SwitchLight;