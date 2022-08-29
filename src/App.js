import './App.css';
import { getPokemones } from "./data/pokemones";
import Container from './components/Container';
import CustomButton from './components/CustomButton';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0)
  
  const incrementar = () => {
      console.log('se ejecuto la funcion de incrementar')
      setContador(contador+1)
  }
 
  return (
      <>
        <h2>{contador}</h2>
        <CustomButton funcion={incrementar}/>
      </>
  );
}

export default App;
