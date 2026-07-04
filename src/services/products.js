import api from './api'

export const fetchProducts = async (params = {}) => {
  const { data } = await api.get('/products', { params })
  return data
}

export const fetchProductBySlug = async (slug) => {
  const { data } = await api.get(`/products/${slug}`)
  return data
}

export const fetchCategories = async () => {
  const { data } = await api.get('/categories')
  return data
}

export const searchProducts = async (query) => {
  const { data } = await api.get('/products/search', { params: { q: query } })
  return data
}
