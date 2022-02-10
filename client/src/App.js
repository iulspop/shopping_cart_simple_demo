import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Cart from './components/Cart'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

import { productsReceived, productAdded, productEdited, productDeleted } from './redux/actions/productAction'
import { cartItemsReceived, cartCheckout, cartItemAdded } from './redux/actions/cartItemsAction'

const App = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products)
  const cartItems = useSelector(state => state.cartItems)

  useEffect(() => {
    const getAll = async () => {
      const response = await axios.get('/api/products')
      dispatch(productsReceived(response.data))
    }
    getAll()
  }, [dispatch])

  useEffect(() => void axios.get('/api/cart').then(response => dispatch(cartItemsReceived(response.data))), [dispatch])

  const handleAddProduct = async (newProduct, cleanup = () => {}) => {
    const response = await axios.post('/api/products', newProduct)

    if (response.status === 200) {
      dispatch(productAdded(response.data))
      cleanup()
    }
  }

  const handleDeleteProduct = async productID => {
    const response = await axios.delete(`/api/products/${productID}`)

    if (response.status === 200) {
      dispatch(productDeleted(productID))
    }
  }



  const handleAddToCart = async id => {
    let response = await axios.post('/api/add-to-cart/', { productId: id })

    if (response.status === 200) {
      dispatch(cartItemAdded(response.data))
    }
  }

  const handleCheckoutCart = async () => {
    let response = await axios.post('/api/checkout')

    if (response.status === 200) {
      dispatch(cartCheckout())
    }
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} onCheckoutCart={handleCheckoutCart} />
      </header>

      <main>
        <ProductList
          productList={products}
          onDeleteProduct={handleDeleteProduct}
          onAddToCart={handleAddToCart}
        />
        <AddProductForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  )
}

export default App

/*
x Create a store
x Create a provider
x Create a root reducer
- In each component we select the properties we need using useSelector
- In each component where actions are created, dispatch those actions
- Write action creators
- Factor out individual reducers
*/

/*
Product
- does it load product list X
  READ
- submit add product form, adds a product X
  CREATE
- submit edit form, edits product X
  UPDATE
- click X button on product, deletes product X
  DELETE

Cart
- does it load cart items X
- click add to cart, adds cart item X
  - updates quantity in product list and cart
  - when product quantity is 0, disable button and turn text red
- click checkout, clear cart

*/
