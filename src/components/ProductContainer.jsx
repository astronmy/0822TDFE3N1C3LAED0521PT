import { useState, useEffect } from "react"
import { Box, Container, Grid, Skeleton, Stack } from '@chakra-ui/react'
import Product from "./Product"

const ProductContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getProducts = (search = "relojes") => {
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
        setLoading(true)

        setTimeout(() => {
            fetch(url)
                .then((response) => response.json())
                .then((result) => setProducts(result.results))
                .finally(() => setLoading(false))
        }, 1500)
    }

    useEffect(() => {
        getProducts()
    }, [])


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