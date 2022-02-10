const products = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload.products
    }
    case 'PRODUCT_EDITED': {
      const updatedProduct = action.payload.product
      return state.map(product => (product._id === updatedProduct._id ? updatedProduct : product))
    }
    default: {
      return state
    }
  }
}

export default products
