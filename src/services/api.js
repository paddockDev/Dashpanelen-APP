import axios from 'axios'
import Cookies from 'js-cookie'

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': 'Bearer ' + Cookies.get(`${process.env.REACT_APP_NAME}-auth-token`),
    'Content-Type': 'application/json',
  }
})
