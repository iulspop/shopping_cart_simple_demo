import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Cart from './Cart'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'

import { productsReceived } from '../redux/actions/productAction'
import { cartItemsReceived } from '../redux/actions/cartItemsAction'

const App = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products)
  const cartItems = useSelector(state => state.cartItems)

  useEffect(
    () => void axios.get('/api/products').then(response => dispatch(productsReceived(response.data))),
    [dispatch]
  )
  useEffect(() => void axios.get('/api/cart').then(response => dispatch(cartItemsReceived(response.data))), [dispatch])

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} />
      </header>

      <main>
        <ProductList productList={products} />
        <AddProductForm />
      </main>
    </div>
  )
}

export default App
