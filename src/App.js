import './App.css';
import { getPokemones } from "./data/pokemones";
import Container from './components/Container';

function App() {
 
  return (
      <Container data={getPokemones()} title="Tengo que atraparlos!"/>
  );
}

export default App;
