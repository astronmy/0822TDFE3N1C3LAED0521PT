import { useEffect } from "react";


const Reloj = ({hora}) =>{

  useEffect( () => {
      console.log("se monto el reloj hora")
     return () => {
        console.log("Se desmonto el reloj hora")
     }  
  }, [])

  return (
      <h2>{hora}</h2>
  )
}
export default Reloj;