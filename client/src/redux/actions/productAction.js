import { productsAPI } from '../../api'

export const productsReceived = () => {
  return dispatch => {
    productsAPI.getProducts(products => {
      dispatch({ type: 'PRODUCTS_RECEIVED', payload: { products } })
    })
  }
}

export const productAdded = product => {
  return { type: 'PRODUCT_ADDED', payload: { product } }
}

export const productDeleted = productID => {
  return { type: 'PRODUCT_DELETED', payload: { productID } }
}

export const productEdited = product => {
  return { type: 'PRODUCT_EDITED', payload: { product } }
}
