import { createContext, useState } from "react"


const Context = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (product, quantity) => {

    let item = isExists(product.id)
    if (!item) {
        item = {
          ...product,
          quantity
        }
        setCart([...cart, item])
    }else{
       cart.forEach(product => {
          if(product.id === item.id){
            product.quantity += quantity
          }
       })
    }

  }
  const isExists = (id) => {
    return cart.find((item) => item.id === id)
  }


  return (
    <Context.Provider value={{
      addItem
    }}>
      {children}
    </Context.Provider>
  )

}

export default Context