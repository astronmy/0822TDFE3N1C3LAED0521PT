import { useEffect, useState } from 'react';
import './App.css';
import styles from './styles/container.module.css'
import Character from './components/Character';

const endpoint = "https://rickandmortyapi.com/api/character/?page=";

function App() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [personajes, setPersonajes] = useState([])

  useEffect( () => {
    console.log('1')
      fetch(`${endpoint}${page}`)
      .then( (response) => response.json())
      .then( (data) => {
          setPersonajes(data.results)
          setLoading(false)
      })
  }, [])

  useEffect( () => {
    fetch(`${endpoint}${page}`)
    .then( (response) => response.json())
    .then( (data) => {
        console.log('page')
        setPersonajes(data.results)
        setLoading(false)
    })
}, [page])

  const handleNext = () => {
      setPage(page+1)
  }
  
  const handlePrevious = () => {
      if(page > 1){
        setPage(page-1)
      }
  }


  if(loading){
      return (
        <h4>Obteniendo informacion....</h4>
      )
  }
 
  return (
      <>
        <div className={styles.buttonbar}>
            <button onClick={handlePrevious}>Previo</button>
            <button onClick={handleNext}>Siguiente</button>
        </div>
        {personajes.map( (personaje) => <Character key={personaje.id} name={personaje.name} image={personaje.image} />)}
      </>
  );
}

export default App;
