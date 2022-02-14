import { createContext, useReducer } from 'react'
import { productsAPI } from '../api'

const ProductsContext = createContext()

const productsReducer = (state, action) => {
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

const productsActions = {
  productsReceived: dispatch => {
    productsAPI.getProducts(products => {
      dispatch({ type: 'PRODUCTS_RECEIVED', payload: { products } })
    })
  },
  productAdded: (dispatch, product, cleanup) => {
    productsAPI.addProduct(product, updatedProduct => {
      dispatch({ type: 'PRODUCT_ADDED', payload: { product: updatedProduct } })
      cleanup()
    })
  },
  productDeleted: (dispatch, productID) => {
    productsAPI.deleteProduct(productID, () => {
      dispatch({ type: 'PRODUCT_DELETED', payload: { productID } })
    })
  },
  productEdited: (dispatch, id, edits, cleanup) => {
    productsAPI.updateProduct(id, edits, updatedProduct => {
      dispatch({ type: 'PRODUCT_EDITED', payload: { product: updatedProduct } })
      cleanup()
    })
  },
}

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, [])

  return <ProductsContext.Provider value={{ products, dispatch }}>{children}</ProductsContext.Provider>
}

export { ProductsContext, ProductsProvider, productsActions }
