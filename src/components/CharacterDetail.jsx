import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";

const CharacterDetail = ( ) => {
  const [character, setCharacter] = useState({})
  const {id} = useParams();

  useEffect(() => {
      getCharacterById(id).then( (response) => {
        console.log(response.data)
        setCharacter(response.data)
      })
  },[id]);

  return (
      <h2 style={{color: 'white'}}>{character.name}</h2>
  )
}
export default CharacterDetail;