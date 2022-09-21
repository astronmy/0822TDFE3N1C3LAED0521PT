import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from '../styles/product-detail.module.css'
import ItemCount from "./ItemCount"
import CartContext from "../context/CartContext"
import { useContext } from "react"

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const { id: productId } = useParams()

  const {addItem} = useContext(CartContext)

  const getProductDetail = (id) => {
    const url = `https://api.mercadolibre.com/items/${id}`
    setLoading(true)

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setProduct(result)
          
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getProductDetail(productId)
  }, [productId])

  const handleOnAdd = (count) => {
    console.log(count)
      const {id, title} = product
      addItem({id, title}, count)
  }


  if(loading){
    return (
        <h5>Cargando producto</h5>
    )
  }

  return (
    <>
      <h5>Detalle del Producto</h5>
      {product.pictures &&  product.pictures.map( (imagen) => <img className={styles.productImg} key={imagen.id} src={imagen.secure_url} alt={imagen.id} />)}
      <h4>{product.title}</h4>
      <h5>{product.price}</h5>
      <ItemCount stock={product.available_quantity} onAddItem={handleOnAdd} />

    </>
  )

}
export default ProductDetail