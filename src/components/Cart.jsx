
import { Container, Grid, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, getTotal, removeItem } = useContext(CartContext)

  return (
    <Container maxW='4xl' centerContent >
      <Text fontSize='1rem'>{`$${getTotal()}`}</Text>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
          {cart.map(item => <CartItem key={item.id} {...item} onRemove={() => removeItem(item.id)} />)}
      </Grid>
    </Container>
  )
}

export default Cart