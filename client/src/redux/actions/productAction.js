import { productsAPI } from '../../api'

export const productsReceived = () => {
  return dispatch => {
    productsAPI.getProducts(products => {
      dispatch({ type: 'PRODUCTS_RECEIVED', payload: { products } })
    })
  }
}

export const productAdded = (product, cleanup) => {
  return dispatch => {
    productsAPI.addProduct(product, updatedProduct => {
      dispatch({ type: 'PRODUCT_ADDED', payload: { product: updatedProduct } })
      cleanup()
    })
  }
}

export const productDeleted = productID => {
  return dispatch => {
    productsAPI.deleteProduct(productID, () => {
      dispatch({ type: 'PRODUCT_DELETED', payload: { productID } })
    })
  }
}

export const productEdited = (id, edits, cleanup) => {
  return dispatch => {
    productsAPI.updateProduct(id, edits, updatedProduct => {
      dispatch({ type: 'PRODUCT_EDITED', payload: { product: updatedProduct } })
      cleanup()
    })
  }
}
