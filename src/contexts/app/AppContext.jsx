import { createContext, useReducer } from 'react'
import { appReducer } from './AppReducers'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, [])
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
