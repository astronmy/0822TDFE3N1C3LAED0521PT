import { useState, useEffect } from "react"
import Product from "./Product"

const ProductContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getProducts = (search = "relojes") => {
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
        setLoading(true)

        fetch(url)
        .then( (response) => response.json() )
        .then( (result) => setProducts(result.results))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        getProducts()
    }, [])


    if(loading){
      return (
          <h5>Cargando productos ...</h5>
      )
    }

    return(
        <div>
            {products.map( (item) => <Product key={item.id} {...item} />)}
        </div>
    )

}

export default ProductContainer