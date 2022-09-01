import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Character from './components/Character';
import styles from './styles/container.module.css'

const endpoint = "https://rickandmortyapi.com/api/character/?page="

function App() {
  const [loading, setLoading] = useState(true)
  const [personajes, setPersonajes] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [buttonPages, setButtonPages] = useState([])
  
   /* 
        axios.metodo(url) 
        axios.post(url, {}, headers)
    */
    /* 
      axios.get(endpoint + page)
      .then((response) => {
        console.log(response.data)
        setPersonajes(response.data.results)
        setLoading(false)
      }); 
    */
    

  useEffect(() => {
    async function fetchData() {
      const url = endpoint + page;
      const response = await axios.get(url)

      const characters = response.data.results;
      const info       = response.data.info;

      console.log(info)

      setPersonajes(characters)
      setTotal(info.pages)
      setLoading(false)

      let botones = []
      for (let index = 1; index <= total; index++) {
        botones.push({page: index, url: endpoint + index })
      }
      setButtonPages(botones)
    }

    fetchData()
  }, [page])


  /*   useEffect( () => {
      fetch(endpoint+page)
      .then( (response) => response.json())
      .then( (data) => {
            setPersonajes(data.results)
            setLoading(false)
      })
  }, [page]) */


  const handleNext = () => {
    if(page < total){
      setPage(page + 1)
    }
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  if (loading) {
    return (
      <h3>Obteniendo personajes....</h3>
    )
  }

  return (
    <>
      <div className={styles.buttonbar}>
        {page > 1 && <button onClick={handlePrev}>Prev</button>}
        <button onClick={handleNext}>Next</button>
      </div>
      <div className={styles.container}>
        {personajes.map((personaje) =>
          <Character key={personaje.id} name={personaje.name} image={personaje.image} />
        )
        }
      </div>
      <div className={styles.pagination}>
        {buttonPages.map( (item) => <button onClick={() => setPage(item.page)}>{item.page}</button>)}
      </div>
    </>
  )
}

export default App;
