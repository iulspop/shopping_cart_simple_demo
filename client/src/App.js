import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Cart from './components/Cart'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

const App = () => {
  const [productList, setProductList] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const getAll = async () => {
      const response = await axios.get('/api/products')
      setProductList(response.data)
    }
    getAll()
  }, [])

  const handleAddProduct = async (newProduct, cleanup = () => {}) => {
    const response = await axios.post('/api/products', newProduct)

    if (response.status === 200) {
      setProductList([...productList, response.data])
      cleanup()
    }
  }

  const handleDeleteProduct = async productID => {
    const response = await axios.delete(`/api/products/${productID}`)

    if (response.status === 200) {
      setProductList(productList.filter(product => product._id != productID))
    }
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} />
      </header>

      <main>
        <ProductList productList={productList} onDeleteProduct={handleDeleteProduct} />
        <AddProductForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  )
}

export default App

/*

Product
- does it load product list X
  READ
- submit add product form, adds a product X
  CREATE
- submit edit form, edits product
  UPDATE
- click X button on product, deletes product X
  DELETE

Cart
- does it load cart items
- click add to cart, adds cart item
  - updates quantity in product list and cart
- click checkout, clear cart

*/
