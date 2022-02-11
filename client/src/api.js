import axios from 'axios'

export const productsAPI = {
  getProducts: (callback = () => {}) => {
    axios
      .get('/api/products')
      .then(response => response.data)
      .then(callback)
      .catch(err => console.error(err))
  },
  addProduct: (product, callback = () => {}) => {
    axios
      .post('/api/products', product)
      .then(response => response.data)
      .then(callback)
      .catch(err => console.error(err))
  },
  updateProduct: (id, edits, callback = () => {}) => {
    axios
      .put(`/api/products/${id}`, edits)
      .then(response => response.data)
      .then(callback)
      .catch(err => console.error(err))
  },
  deleteProduct: (id, callback = () => {}) => {
    axios
      .delete(`/api/products/${id}`)
      .then(response => response.data)
      .then(callback)
      .catch(err => console.error(err))
  },
}

export const cartItemsAPI = {
  getCartItems: (callback = () => {}) => {
    axios
      .get('/api/cart')
      .then(response => response.data)
      .then(callback)
      .catch(err => console.err(err))
  },
  addCartItem: (productId, callback = () => {}) => {
    axios
      .post('/api/add-to-cart/', { productId })
      .then(response => response.data)
      .then(callback)
      .catch(err => console.err(err))
  },
  checkoutCartItems: (callback = () => {}) => {
    axios
      .post('/api/checkout')
      .then(response => response.data)
      .then(callback)
      .catch(err => console.err(err))
  },
}
