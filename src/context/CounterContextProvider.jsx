import { createContext, useState } from "react"

const Context = createContext() 

export const CounterContextProvider = ({children}) =>{
    const[cantidad, setCantidad] = useState(0)

    const sumar = () => {
      setCantidad(cantidad+1)
    }
    const restar = () => {
      setCantidad(cantidad-1)
    }
    const getTotal = () => {
      return cantidad;
    }

    return (
        <Context.Provider value={{
          sumar,
          restar,
          getTotal
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context