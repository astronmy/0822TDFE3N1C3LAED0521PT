import { useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
/* style components */
import { Box, Image } from '@chakra-ui/react'
/* components */
import CartContext from "../context/CartContext"
import ItemCount from "./ItemCount"
import { useAsync } from "../hooks/useAsync"
import { getProductById } from "../services/MeliApi"

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const { id: productId } = useParams()
  const { addItem } = useContext(CartContext)
  const navigate = useNavigate()

  useAsync(
    setLoading,
    () => getProductById(productId),
    setProduct,
    null,
    [],
    null,
    null)
  

  const handleOnAdd = (count) => {
    console.log(count)
    const { id, title, price, secure_thumbnail:image } = product
    addItem({ id, title, price, image }, count)
  }


  if (loading) {
    return (
      <h5>Cargando producto</h5>
    )
  }

  return (
    <Box maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <h5>Detalle del Producto</h5>
      {product.pictures && product.pictures.map((imagen) =>
        <Image key={imagen.id} src={imagen.secure_url} alt={imagen.id} maxW='100px' />)}
      <h4>{product.title}</h4>
      <h5>{product.price}</h5>
      <ItemCount stock={product.available_quantity} onAddItem={handleOnAdd} />
      <button onClick={()=> navigate('/cart') }>Ir al Carrito</button>
    </Box>
  )

}
export default ProductDetail