import React from 'react'
import ReactDOM from 'react-dom'

import { CartItemsProvider } from './context/cartItemsContext'
import { ProductsProvider } from './context/productsContext'

import './index.css'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartItemsProvider>
        <App />
      </CartItemsProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
