import axios from 'axios'

const API_URL = 'http://localhost:4000'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? API_URL,
})

export default axiosClient
