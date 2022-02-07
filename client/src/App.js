import React from 'react'

import Cart from './components/Cart'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

const App = () => {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>

      <main>
        <ProductList />
        <AddProductForm />
      </main>
    </div>
  )
}

export default App

/*
    App
      Cart
        CartItem
      ProductList
        Product
          if edit => ProductEditForm
      if add => AddProductForm
*/
