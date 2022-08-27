import './App.css';
import Button from './components/Button';
import CounterApp from './components/CounterApp';
import RelojHook from './components/RelojHooks';
import styles from './styles/app.module.css'

function App() {
  
  const handleClick = (texto) => {
    console.log(texto)

  }

  return (
    <div className={styles.container}>
     {/* <h1>Hola</h1>
     <button onClick={() => handleClick( "Hola Mundo")}> Click </button>
     <Button myClick={() => handleClick( "Hola Mundo")}/>
      <RelojHook></RelojHook> */}

      <CounterApp stock={20}/>

    </div>
  );
}

export default App;
