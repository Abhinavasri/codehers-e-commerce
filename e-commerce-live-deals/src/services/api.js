import axios from 'axios'

const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({ baseURL, timeout: 8000 })

export async function fetchProducts(params={}){
  try{
    const res = await api.get('/products', { params })
    return res.data
  }catch(e){
    // Propagate error — caller can fallback to mock data
    throw e
  }
}

export async function fetchProductById(id){
  try{
    const res = await api.get(`/products/${id}`)
    return res.data
  }catch(e){
    throw e
  }
}

export async function fetchDeals(){
  try{
    const res = await api.get('/deals')
    return res.data
  }catch(e){
    throw e
  }
}

export default api