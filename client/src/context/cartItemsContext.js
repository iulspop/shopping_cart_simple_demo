import { createContext, useReducer } from 'react'
import { cartItemsAPI } from '../api'

const CartItemsContext = createContext()

const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case 'CART_ITEMS_RECEIVED': {
      return action.payload.items
    }
    case 'CART_ITEM_ADDED': {
      const newItem = action.payload.item
      if (state.some(item => item._id === newItem._id)) {
        return state.map(item => (item._id === newItem._id ? newItem : item))
      } else {
        return [...state, newItem]
      }
    }
    case 'CART_CHECKOUT': {
      return []
    }
    default: {
      return state
    }
  }
}

const actions = {
  cartItemsReceived: dispatch => {
    cartItemsAPI.getCartItems(items => dispatch({ type: 'CART_ITEMS_RECEIVED', payload: { items } }))
  },
  cartItemAdded: (productId, dispatch) => {
    cartItemsAPI.addCartItem(productId, ({ product, item }) =>
      dispatch({ type: 'CART_ITEM_ADDED', payload: { product, item } })
    )
  },
  cartCheckout: dispatch => {
    cartItemsAPI.checkoutCartItems(() => dispatch({ type: 'CART_CHECKOUT', payload: {} }))
  },
}

const CartItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(cartItemsReducer, [])
  return <CartItemsContext.Provider value={{ items, dispatch }}>{children}</CartItemsContext.Provider>
}

export { CartItemsContext, CartItemsProvider, actions }

/*
    - Wrap the App in two ContextProviders (Cart, Products)
    - Define the context Providers
      - creating the reducer function
      - import Context (createContext())
      - return Context.Provider component (with children)
    - In components: replace ... with useContext and calling dispatch

*/
