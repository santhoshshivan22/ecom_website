import api from './api'

export const getSubmissions = async () => {
  const response = await api.get('/submissions')
  return response.data
}
