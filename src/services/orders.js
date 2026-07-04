import api from './api'

export const fetchOrders = async () => {
  const { data } = await api.get('/orders')
  return data
}

export const fetchOrderById = async (id) => {
  const { data } = await api.get(`/orders/${id}`)
  return data
}

export const createOrder = async (orderData) => {
  const { data } = await api.post('/orders', orderData)
  return data
}
