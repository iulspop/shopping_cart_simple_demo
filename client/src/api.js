import axios from 'axios'

export const productsAPI = {
  getProducts: (callback = () => {}) => {
    axios.get('/api/products')
    .then(response => response.data)
    .then(callback)
    .catch(err => console.err(err))
  },

  addProduct: (product, callback = () => {}) => {},
  updateProduct: (id, changes, callback = () => {}) => {},
  deleteProduct: (id, callback = () => {}) => {},
}

export const cartItemsAPI = {
  getCartItems: (callback = () => {}) => {},
  addCartItem: (productId, callback = () => {}) => {},
  checkoutCartItems: (callback = () => {}) => {},
}
