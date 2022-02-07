import React, { useState } from 'react'

import initialProductList from './data.js'

import Cart from './components/Cart'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

const App = () => {
  const [productList, setProductList] = useState(initialProductList)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Amazon Kindle E-reader',
      quantity: 5,
      price: 79.99,
    },
  ])

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} />
      </header>

      <main>
        <ProductList productList={productList} />
        <AddProductForm />
      </main>
    </div>
  )
}

export default App
