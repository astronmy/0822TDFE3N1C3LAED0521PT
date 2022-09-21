import { useState } from "react"
import styles from '../styles/item.module.css'

const ItemCount = ({stock, initial = 0, onAddItem}) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if(stock > count){
      setCount(count+1)
    }
  }
  const subtract = () => {
    if(count > 0){
      setCount(count-1)
    }
  }

  if(stock === 0){
      return <h5>Sin Stock</h5>
  }

  return (
      <div className={styles.itemCount}>
          <button onClick={increment}>+</button>
          <span>{count}</span>
          <button onClick={subtract}>-</button>
          <button onClick={() => onAddItem(count)}>Agregar al Carrito</button>
      </div>
  )
}

export default ItemCount