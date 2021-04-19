import axios from 'axios'
import Cookies from 'js-cookie'

const getToken = () => Cookies.get(`${process.env.REACT_APP_NAME}-auth-token`)

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${getToken}`,
    'Content-Type': 'application/json',
  }
})

API.interceptors.request.use(
  async (config) => {
    const token = await getToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { API }
