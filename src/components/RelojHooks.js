import { useEffect, useState } from "react"
import Reloj from "./Reloj"

const RelojHook = () => {
  const [hour, setHour] = useState(null)
  const [visible, setVisible] = useState(null)

  useEffect(() => {
    console.log("reloj hook monto")
    setHour(new Date().toLocaleTimeString())
    setVisible(false)
  }, [])

  useEffect(() => {
    let temporizador;
    if(visible){
      temporizador = setInterval( () => {
          setHour(new Date().toLocaleTimeString())
      }, 1000)
    }else{
        clearInterval(temporizador)
    }

  }, [visible])

  /*const handleVisible = (visible) =>{
    setVisible(visible)
  }*/

  return (
    <>
      <h2>Reloj</h2>
      {visible && <Reloj hora={hour} />}
      <button onClick={() => setVisible(true)} >Iniciar</button>
      <button onClick={() => setVisible(false)} >Detener</button>
    </>
  )
}

export default RelojHook;