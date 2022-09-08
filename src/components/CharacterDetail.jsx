import { useEffect } from "react"
import { useState } from "react"
import { Link, Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";

const CharacterDetail = ( ) => {
  const [character, setCharacter] = useState({})
  const {id} = useParams();
  const location = useLocation()

  useEffect(() => {
      if(location.state){
          setCharacter(location.state)
      }
      getCharacterById(id).then( (response) => {
        console.log(response.data)
        setCharacter(response.data)
      })
  },[id]);

  return (
      <>
        {/* <Navigate to="/"></Navigate> */}
        <Outlet/>
        <img src={character.image} alt={character.name} />
        <h2 style={{color: 'white'}}>{character.name}</h2>
        <Link to="data">Data</Link>
      </>
  )
}
export default CharacterDetail;