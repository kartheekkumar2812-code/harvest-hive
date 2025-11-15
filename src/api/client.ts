import axios from 'axios'

const BASE = import.meta.env.VITE_API_BASE || 'https://api.example.com'

export const api = axios.create({
  baseURL: BASE,
  timeout: 10000,
})

// Example request
export const fetchMarketplace = async () => {
  const resp = await api.get('/marketplace')
  return resp.data
}
