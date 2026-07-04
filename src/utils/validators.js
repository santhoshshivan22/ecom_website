export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePassword = (password) => {
  return password && password.length >= 8
}

export const validatePhone = (phone) => {
  const re = /^\+?[\d\s().-]{10,}$/
  return re.test(phone)
}