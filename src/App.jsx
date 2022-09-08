import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import CharacterDetail from './components/CharacterDetail';
import CharacterList from './components/CharacterList';
import Header from './components/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />  
        <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/character/:id" element={<CharacterDetail />}>
                <Route path='data' element={<h3 style={{fontSize: '3rem', textAlign: 'center', color: 'white'}}>More Info</h3>} />
            </Route>
            <Route path='*' element={<h2 style={{fontSize: '3rem', textAlign: 'center', color: 'white'}}>NOT FOUND</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
