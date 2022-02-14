import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/store'
import { Provider } from 'react-redux'
import { CartItemsProvider } from './context/cartItemsContext'

import './index.css'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartItemsProvider>
        <App />
      </CartItemsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
