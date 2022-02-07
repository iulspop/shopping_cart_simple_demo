import React, { useState } from 'react'

import initialProductList from './data.js'

import Cart from './components/Cart'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

const App = () => {
  const [productList, _] = useState(initialProductList)

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>

      <main>
        <ProductList productList={productList} />
        <AddProductForm />
      </main>
    </div>
  )
}

export default App
