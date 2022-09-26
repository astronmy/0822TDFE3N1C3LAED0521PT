import { createContext, useState } from "react"


const Context = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (product, quantity) => {

    if (!isInCart(product.id)) {
      let item = {
        ...product,
        quantity
      }
      setCart([...cart, item])
    } else {

      const aux = [...cart]

      aux.forEach(item => {
        if (product.id === item.id) {
          item.quantity += quantity
        }
      })
      setCart(aux)
    }

  }
  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const removeItem = (id) => {
    setCart(cart.filter(product => product.id !== id))
  }

  const getTotal = () => {
      let total = 0
      cart.forEach(product => {
          total += product.price
      })
      return total
  }

  const getQuantity =  () => {
      return cart.length
  }



  return (
    <Context.Provider value={{
      addItem,
      removeItem,
      getTotal,
      getQuantity,
      cart
    }}>
      {children}
    </Context.Provider>
  )

}

export default Context