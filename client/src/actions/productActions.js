export const productsReceived = products => {
  return { type: 'PRODUCTS_RECEIVED', payload: { products } }
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
