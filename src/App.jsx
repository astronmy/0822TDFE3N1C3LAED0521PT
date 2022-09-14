import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import ProductContainer from './components/ProductContainer';
import ProductDetail from './components/ProductDetail';

function App() {

  return (
      <BrowserRouter>
        <Navbar title="E-Commerce" />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductContainer />} />
            <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
