
import { createContext, useReducer } from "react"

export const Store = createContext()

//initial states
const initialState = {
    darkMode: typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'ON' ? true : false,
}

//define reducer
function reducer(state, action) {
    switch (action.type) {
        case 'DARK_MODE_ON':
            return { ...state, darkMode: true }
        case 'DARK_MODE_OFF':
            return { ...state, darkMode: false }
        case 'ACTIVE_LINK_ON':
            return { ...state, activeLink: true }
        case 'ACTIVE_LINK_OFF':
            return { ...state, activeLink: false }
        default:
            return state
    }
}

//define store provider  wrapper component
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch }
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}


