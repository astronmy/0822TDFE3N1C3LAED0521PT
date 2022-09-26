import { useState } from "react"
import {  Container, Grid, Skeleton } from '@chakra-ui/react'
import Product from "./Product"
import { useAsync } from "../hooks/useAsync"
import { getProducts } from "../services/MeliApi"


const ProductContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useAsync(
         setLoading, 
         () => getProducts(), 
         setProducts,
         null,
         [],
         null,
         null )

    if (loading) {
        return (
            <Skeleton>
                <span>Chakra ui is cool</span>
            </Skeleton>
        )
    }

    return (
        <Container maxW='4xl' centerContent >
            <Grid templateColumns='repeat(1, 1fr)' gap={6}>
                {products.map((item) => <Product key={item.id} {...item} />)}
            </Grid>
        </Container>
    )

}

export default ProductContainer