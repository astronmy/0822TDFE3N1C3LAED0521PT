import './App.css';
import Container from './componentes/Container';
import ContainerF from './componentes/ContainerF';


function App() {

  const heroes = [
    {id: 1, name: 'Spiderman', origin: 'Marvel'},
    {id: 2, name: 'Batman', origin: 'DC'},
    {id: 3, name: 'Superman', origin: 'DC'},
    {id: 4, name: 'Hulk', origin: 'Marvel'}
  ]
  return (
    <>
        <ContainerF data={heroes} titulo="Bienvenidos" />
    </>
  );
}

export default App;
