import { API } from './api'

const addInsight = async (data) => {
  return await API.post(`${process.env.REACT_APP_API_URL}me/insights/add`, data)
    .then((res) => res.data)
}

const deleteInsight = async (id) => {
  return await API.delete(`${process.env.REACT_APP_API_URL}me/insights/${id}/delete`)
    .then((res) => res.data)
}

const insights = async () => {
  return await API.get(`${process.env.REACT_APP_API_URL}me/insights`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message))
}

const profile = async () => {
  return await API.get(`${process.env.REACT_APP_API_URL}me`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message))
}

const updateInsights = async(data) => {
  return await API.put(`${process.env.REACT_APP_API_URL}me/insights/update`, data)
}

const updateProfile = async (data) => {
  return await API.put(`${process.env.REACT_APP_API_URL}me`, data)
}

export {
  addInsight,
  deleteInsight,
  insights,
  profile,
  updateInsights,
  updateProfile
}
