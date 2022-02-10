const cartItems = (state = [], action) => {
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

export default cartItems
