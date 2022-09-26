import axios from "axios";

const baseUrl = "https://api.mercadolibre.com/";

export const getProductsBySearch = async(query = "") => {
    const endpoint = `${baseUrl}/sites/MLA/search?q=${query}`
    const response = await axios.get(endpoint)
    return response.results
} 

export const getProductsById = async(id) => {
  const  endpoint = `${baseUrl}/items${id}`
  return await axios.get(endpoint)
} 


export const getProducts = () => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=relojes`
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => response.json())
                  .then((result) => resolve(result.results) )
    })
}

export const getProductById = (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`
  return new Promise((resolve, reject) => {
      fetch(url).then((response) => response.json())
                .then((result) => resolve(result) )
  })
}