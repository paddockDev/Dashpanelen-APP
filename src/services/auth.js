import Cookies from 'js-cookie'
import { API } from './api'
import axios from 'axios'
import jwt from 'jsonwebtoken'

const setAuthHeaders = () => {
  const token = Cookies.get(`${process.env.REACT_APP_NAME}-auth-token`)
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    return true
  } else {
    return false
  }
}

const login = async (email, password) => {
  try {
    const data = await API.post(`login`, {
      email, password
    })

    const token = data.headers['x-access-token']

    if (token) {
      Cookies.set(`${process.env.REACT_APP_NAME}-auth-token`, token)
      return true
    } else {
      throw new Error(`Login failed`)
    }
  } catch (e) {
    console.log(e.message)
    return false
  }
}

const logout = () => {
  Cookies.remove(`${process.env.REACT_APP_NAME}-auth-token`)
}

const register = async (email, password, name, username) => {
  try {
    const data = await API.post('register',{
      email: email,
      password: password,
      name: name,
      username: username
    })

    const token = data.data.accessToken
    if (token) {
      Cookies.set(`${process.env.REACT_APP_NAME}-auth-token`, token)
      return true
    } else {
      throw new Error(`Register failed`)
    }
  } catch (e) {
    console.log(e.message)
    return false
  }
}

const decodeToken = () => {
  const token = Cookies.get(`${process.env.REACT_APP_NAME}-auth-token`)
  let decodedToken
  try {
    if (token) {
      decodedToken = jwt.decode(token)
    }
  } catch (err) {
    console.log(err.message)
  }
  return decodedToken
}

export {
  setAuthHeaders,
  login,
  logout,
  register,
  decodeToken
}
