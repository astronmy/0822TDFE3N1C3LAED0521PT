import axios from "axios";

const baseUrl = "https://api.mercadolibre.com/";

export const getProductsBySearch = async(query = "") => {
    const endpoint = `${baseUrl}/sites/MLA/search?q=${search}`
    const response = await axios.get(endpoint)
    return response.results
} 

export const getProductsById = async(id) => {
  const  endpoint = `${baseUrl}/items${id}`
  return await axios.get(endpoint)
} 