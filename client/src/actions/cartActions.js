export const cartItemAdded = (product, item) => {
  return { type: 'CART_ITEM_ADDED', payload: { product, item } }
}

export const cartCheckout = () => {
  return { type: 'CART_CHECKOUT', payload: {} }
}
