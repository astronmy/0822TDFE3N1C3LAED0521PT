
import { Button, Container, Grid, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'

const FORM_ID = 'payment-form';

const Cart = () => {
  const { cart, getTotal, removeItem, doCheckout } = useContext(CartContext)
  const onCheckout = async() => {
      const preferenceId = await doCheckout()
      const mp = new window.MercadoPago(process.env.REACT_APP_PUBLIC_KEY, {
        locale: 'es-AR'
      });
      mp.checkout({
        preference: {
          id: preferenceId,
        },
        render: {
          container: `#${FORM_ID}`, // Indica el nombre de la clase donde se mostrará el botón de pago
          label: 'Pagar', // Cambia el texto del botón de pago (opcional)
        },
      });
      mp.checkout({
        preference: {
          id: preferenceId
        },
        render: {
          container: '.cho-container',
          label: 'Pagar',
        }
      });
  }

  return (
    <Container maxW='4xl' centerContent >
      <Text fontSize='1rem'>{`$${getTotal()}`}</Text>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
          {cart.map(item => <CartItem key={item.id} {...item} onRemove={() => removeItem(item.id)} />)}
      </Grid>
      <Button colorScheme="green" onClick={onCheckout}>Checkout</Button>
      <div className="cho-container"></div>
    </Container>
  )
}

export default Cart