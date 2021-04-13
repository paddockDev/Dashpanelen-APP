import { API } from './api'

const bySlug = async (slug) => {
  return await API.get(`${process.env.REACT_APP_API_URL}groups/learning/${slug}`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message))
}

export {
  bySlug
}
