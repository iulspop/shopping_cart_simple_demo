export const cartItemsReceived = (items) => {
  return { type: 'CART_ITEMS_RECEIVED', payload: { items }}
}

export const cartItemAdded = ({ product, item }) => {
  return { type: 'CART_ITEM_ADDED', payload: { product, item } }
}

export const cartCheckout = () => {
  return { type: 'CART_CHECKOUT', payload: {} }
}
