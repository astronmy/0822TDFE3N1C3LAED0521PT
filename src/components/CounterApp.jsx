import { useContext } from "react"
import { useState } from "react"
import Context  from "../context/CounterContextProvider"


const CounterApp = ({quantity}) =>{
  const[stock, setStock] = useState(quantity)
  const {sumar, restar} = useContext(Context)

  const incrementar = () =>{
      setStock(stock+1)
      restar()
  }
  const decrementar = () =>{
    setStock(stock-1)
    sumar()
    
  }

  return (
      <>
        <button onClick={decrementar}> + </button>
        {stock}
        <button onClick={incrementar}> - </button>
      </>
  )
}

export default CounterApp;