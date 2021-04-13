import { API } from './api'

const profile = async () => {
  return await API.get(`${process.env.REACT_APP_API_URL}me`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message))
}

export {
  profile
}
