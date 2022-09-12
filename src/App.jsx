import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CounterApp from './components/CounterApp';
import Header from './components/Header';
import { CounterContextProvider } from './context/CounterContextProvider';

function App() {

  return (
    <CounterContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<CounterApp quantity={10} />} />
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  )
}

export default App;
