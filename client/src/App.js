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

  useEffect(() => void axios.get('/api/cart').then(response => setCartItems(response.data)), [])

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
      setProductList(productList.filter(product => product._id !== productID))
    }
  }

  const handleEditProduct = async (id, edits, cleanup = () => {}) => {
    const response = await axios.put(`/api/products/${id}`, edits)

    if (response.status === 200) {
      setProductList(productList.map(product => (product._id === id ? response.data : product)))
      cleanup()
    }
  }

  const handleAddToCart = async id => {
    let response = await axios.post('/api/add-to-cart/', { productId: id })

    if (response.status === 200) {
      const { product: newProduct, item: newItem } = response.data
      setProductList(productList.map(product => (product._id === newProduct._id ? newProduct : product)))

      if (cartItems.some(item => item._id === newItem._id)) {
        setCartItems(cartItems.map(item => (item._id === newItem._id ? newItem : item)))
      } else {
        setCartItems([...cartItems, newItem])
      }
    }
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} />
      </header>

      <main>
        <ProductList
          productList={productList}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
          onAddToCart={handleAddToCart}
        />
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
