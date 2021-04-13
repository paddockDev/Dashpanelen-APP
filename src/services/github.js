import { API } from './api'

const issues = async () => {
  return await API.get(`graphql/issues`)
    .then((res) => res.data.data.viewer.issues.edges)
    .catch((err) => console.log(err.message))
}

const me = async () => {
  return await API.get(`graphql/me`)
    .then((res) => res.data.data.viewer)
    .catch((err) => console.log(err.message))
}

export {
  issues,
  me
}
