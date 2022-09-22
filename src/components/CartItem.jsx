import { Box, Image, Text, Button } from "@chakra-ui/react"


const CartItem = ({id, title, image, quantity, onRemove}) => {


  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex' 
         justifyContent='space-between' alignItems='center' p='3' >
      <Image src={image} alt={title} borderRadius='full'  boxSize='100px'  />
      <Text fontSize='1rem' color='crimson'>
        {title}
      </Text>
      <Button colorScheme='red' onClick={onRemove}>Quitar</Button>
    </Box>
  )
}

export default CartItem