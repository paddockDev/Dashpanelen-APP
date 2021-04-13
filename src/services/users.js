import { API } from './api'

const insights = async (username) => {
  return await API.get(`${process.env.REACT_APP_API_URL}users/${username}/insights`)
    .then((res) => res.data.data)
    .catch((err) => console.log(err.message))
}

const profile = async (username) => {
  return await API.get(`${process.env.REACT_APP_API_URL}users/${username}`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message))
}

export {
  insights,
  profile
}
