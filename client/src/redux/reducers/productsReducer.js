const products = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload.products
    }
    case 'PRODUCT_ADDED': {
      return [...state, action.payload.product]
    }
    case 'PRODUCT_EDITED': {
      const updatedProduct = action.payload.product
      return state.map(product => (product._id === updatedProduct._id ? updatedProduct : product))
    }
    case 'PRODUCT_DELETED': {
      const productID = action.payload.productID
      return state.filter(product => product._id !== productID)
    }
    case 'CART_ITEM_ADDED': {
      const newProduct = action.payload.product
      return state.map(product => (product._id === newProduct._id ? newProduct : product))
    }
    default: {
      return state
    }
  }
}

export default products
