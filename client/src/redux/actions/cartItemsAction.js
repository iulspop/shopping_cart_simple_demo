import { cartItemsAPI } from '../../api'

export const cartItemsReceived = () => {
  return dispatch => {
    cartItemsAPI.getCartItems(items => dispatch({ type: 'CART_ITEMS_RECEIVED', payload: { items } }))
  }
}

export const cartItemAdded = productId => {
  return dispatch => {
    cartItemsAPI.addCartItem(productId, ({ product, item }) =>
      dispatch({ type: 'CART_ITEM_ADDED', payload: { product, item } })
    )
  }
}

export const cartCheckout = () => {
  return dispatch => {
    cartItemsAPI.checkoutCartItems(() => dispatch({ type: 'CART_CHECKOUT', payload: {} }))
  }
}
