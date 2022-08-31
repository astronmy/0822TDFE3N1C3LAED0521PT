import { useEffect } from "react"


const Character = ({name, image}) =>{

  useEffect( () => {
      return  () =>{
          console.log('se desmonto el personaje')
      } 
  }, [])

  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
    </>
  )

}
export default Character;