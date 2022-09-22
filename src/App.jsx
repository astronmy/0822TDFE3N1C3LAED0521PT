import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import ProductContainer from './components/ProductContainer';
import ProductDetail from './components/ProductDetail';
import { CartContextProvider } from './context/CartContext';
import { ChakraProvider } from '@chakra-ui/react'
import Cart from './components/Cart';

function App() {

  return (
    <ChakraProvider >
      <CartContextProvider>
        <BrowserRouter>
          <Navbar title="E-Commerce" />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<ProductContainer />} />
            <Route path='/products/:id' element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>

  )
}

export default App;
